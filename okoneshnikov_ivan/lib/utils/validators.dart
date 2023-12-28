String? emailValidator(String? value) {
  const String pattern =
      r"^([a-z0-9A-Z]+(?:[._-][a-z0-9A-Z]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$";
  if (value == null) return "Field is empty";
  if (value.trim().isEmpty) return "Field is empty";
  if (!RegExp(pattern).hasMatch(value)) {
    return "Invalid email";
  }
  return null;
}

String? passwordValidator(String? value) {
  if (value == null) return "Field is empty";
  if (value.trim().isEmpty) return "Field is empty";
  // if (value.trim().length <= 2) {
  //   return LocaleKeys.short_field_error.tr(args: ['2']);
  // }
  return null;
}
