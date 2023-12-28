import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:okoneshnikov_ivan/components/button.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  final FlutterSecureStorage _storage = const FlutterSecureStorage();

  late String token;
  late bool _loading;

  Future<void> _clearToken() async {
    await _storage.delete(key: "token");
  }

  Future<void> _getToken() async {
    token = await _storage.read(key: "token") ?? "";
    setState(() {});
  }

  void setLoading(bool value) {
    setState(() {
      _loading = value;
    });
  }

  @override
  void initState() {
    _loading = false;
    token = "";
    _getToken();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Container(
        padding: const EdgeInsets.all(12),
        child: Column(
          children: [
            Text("Ваш токен: ${token}"),
            const Spacer(),
            Button(
              color: Theme.of(context).colorScheme.inversePrimary,
              onTap: () {
                setLoading(true);
                _clearToken().then(
                    (_) => Navigator.of(context).pushReplacementNamed("LOGIN"));
              },
              status: _loading ? ButtonStatus.LOADING : ButtonStatus.ENABLED,
              label: "Logout",
            ),
          ],
        ),
      ),
    );
  }
}
