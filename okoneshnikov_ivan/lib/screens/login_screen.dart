import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:okoneshnikov_ivan/components/button.dart';
import 'package:okoneshnikov_ivan/utils/validators.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final FlutterSecureStorage _storage = const FlutterSecureStorage();
  late bool _loading;
  late TextEditingController _email;
  late TextEditingController _password;
  late String _error;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    _loading = false;
    _email = TextEditingController(text: "");
    _password = TextEditingController(text: "");
    _error = "";
    _checkToken();
    super.initState();
  }

  Future<String?> _getToken() async {
    return await _storage.read(key: "token");
  }

  void _checkToken() {
    _getToken().then((token) {
      if (token != null && token.isNotEmpty) {
        Navigator.of(context).pushReplacementNamed("HOME");
      }
    });
  }

  void login(BuildContext context) async {
    setLoading(true);
    final dio = Dio();
    await dio.post(
        'https://global-dev-backend.lifeykt.ru/patient/api/v1/users/login/',
        data: {
          "username": _email.text,
          "password": _password.text
        }).then((response) async {
      await _storage
          .write(
        key: "token",
        value: response.data["token"],
      )
          .then((_) {
        Navigator.of(context).pushReplacementNamed("HOME");
      });
      setLoading(false);
    }).catchError((e) {
      if (e is DioException) {
        setError(_error = e.response?.data["error"]["message"]);
      } else {
        setError('Ошибка');
      }
      setLoading(false);
    });
  }

  void setLoading(bool value) {
    setState(() {
      _loading = value;
    });
  }

  void setError(String value) {
    setState(() {
      _error = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Login"),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Container(
        padding: const EdgeInsets.all(12),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                controller: _email,
                decoration: const InputDecoration(
                  labelText: 'Email',
                  helperText: 'Example: example@example.com',
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (emailValidator(value) == null) {
                    return null;
                  }
                  return emailValidator(value);
                },
                onChanged: (_) {
                  _formKey.currentState!.validate();
                },
              ),
              const SizedBox(
                height: 12,
              ),
              TextFormField(
                controller: _password,
                decoration: const InputDecoration(
                  labelText: 'Password',
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.visiblePassword,
                validator: (value) {
                  if (passwordValidator(value) == null) {
                    return null;
                  }
                  return passwordValidator(value);
                },
                onChanged: (_) {
                  _formKey.currentState!.validate();
                },
              ),
              if (_error.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 12),
                  child: Text(
                    _error,
                    style:
                        TextStyle(color: Theme.of(context).colorScheme.error),
                  ),
                ),
              const SizedBox(
                height: 12,
              ),
              Button(
                color: Theme.of(context).colorScheme.inversePrimary,
                onTap: () {
                  if (_formKey.currentState!.validate()) {
                    login(context);
                  }
                },
                status: _loading ? ButtonStatus.LOADING : ButtonStatus.ENABLED,
                label: "Войти",
              )
            ],
          ),
        ),
      ),
    );
  }
}
