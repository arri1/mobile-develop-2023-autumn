import 'package:flutter/material.dart';
import 'package:okoneshnikov_ivan/navigators/bottom_navigator_bar.dart';
import 'package:okoneshnikov_ivan/screens/login_screen.dart';

class AppNavigator extends StatelessWidget {
  const AppNavigator({super.key});

  @override
  Widget build(BuildContext context) {
    return Navigator(
      initialRoute: 'LOGIN',
      onGenerateRoute: (settings) {
        switch (settings.name) {
          case 'LOGIN':
            return MaterialPageRoute(
              builder: (context) => const LoginScreen(),
            );
          case 'HOME':
            return MaterialPageRoute(
              builder: (context) => const BottomNavigator(),
            );
          default:
            return MaterialPageRoute(
              builder: (context) => Container(),
            );
        }
      },
    );
  }
}
