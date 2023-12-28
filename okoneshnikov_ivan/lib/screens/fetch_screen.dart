import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:flutter/services.dart';
import 'package:okoneshnikov_ivan/components/button.dart';

class FetchScreen extends StatefulWidget {
  const FetchScreen({super.key});

  @override
  State<FetchScreen> createState() => _FetchScreenState();
}

class _FetchScreenState extends State<FetchScreen> {
  late bool _loading;
  late String _gender;
  late String _error;
  late TextEditingController _limit;
  late FocusScopeNode _node;
  late List<String> _names;

  void _getNames() async {
    setLoading(true);
    final dio = Dio();
    await dio.get(
      'https://api.fungenerators.com/pirate/generate/name',
      queryParameters: {"gender": _gender, "limit": _limit.text},
    ).then((response) {
      print(response.data);
      final names = response.data["names"] as Iterable;
      _names = names.map((name) => jsonEncode(name)).toList();
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

  @override
  void initState() {
    _loading = false;
    _gender = "";
    _error = "";
    _limit = TextEditingController(text: "");
    _node = FocusScopeNode();
    _names = [];
    super.initState();
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
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Api call'),
      ),
      body: Focus(
        focusNode: _node,
        child: GestureDetector(
          onTap: () {
            _node.unfocus();
          },
          child: Container(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Gender',
                  style: TextStyle(fontSize: 16),
                ),
                Column(
                  children: <Widget>[
                    InkWell(
                      onTap: () {
                        setState(() {
                          _gender = '';
                        });
                      },
                      child: ListTile(
                        contentPadding: const EdgeInsets.all(0),
                        title: const Text('Not chosen'),
                        leading: Radio<String>(
                          value: '',
                          groupValue: _gender,
                          onChanged: (String? value) {
                            setState(() {
                              _gender = value ?? "";
                            });
                          },
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          _gender = 'Male';
                        });
                      },
                      child: ListTile(
                        contentPadding: const EdgeInsets.all(0),
                        title: const Text('Male'),
                        leading: Radio<String>(
                          value: 'Male',
                          groupValue: _gender,
                          onChanged: (String? value) {
                            setState(() {
                              _gender = value ?? "";
                            });
                          },
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          _gender = 'Female';
                        });
                      },
                      child: ListTile(
                        contentPadding: const EdgeInsets.all(0),
                        title: const Text('Female'),
                        leading: Radio<String>(
                          value: "Female",
                          groupValue: _gender,
                          onChanged: (String? value) {
                            setState(() {
                              _gender = value ?? "";
                            });
                          },
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 12,
                ),
                TextFormField(
                  controller: _limit,
                  decoration: const InputDecoration(
                    labelText: 'Limit of names',
                    helperText: 'Example: 10',
                    border: OutlineInputBorder(),
                  ),
                  keyboardType: TextInputType.number,
                  inputFormatters: [
                    FilteringTextInputFormatter.allow(RegExp(r'[0-9]'))
                  ],
                ),
                const SizedBox(
                  height: 12,
                ),
                Button(
                  color: Theme.of(context).colorScheme.inversePrimary,
                  status:
                      _loading ? ButtonStatus.LOADING : ButtonStatus.ENABLED,
                  label: 'Search',
                  onTap: _getNames,
                ),
                if (_names.isNotEmpty)
                  Column(
                    children: _names
                        .map(
                          (name) => Padding(
                            padding: const EdgeInsets.only(top: 12),
                            child: Text(
                              name,
                              style: Theme.of(context).textTheme.labelMedium,
                            ),
                          ),
                        )
                        .toList(),
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
              ],
            ),
          ),
        ),
      ),
    );
  }
}
