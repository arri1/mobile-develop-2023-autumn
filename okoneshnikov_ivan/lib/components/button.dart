import 'package:flutter/material.dart';

enum ButtonStatus {
  ENABLED,
  DISABLED,
  LOADING,
}

class Button extends StatelessWidget {
  final Color color;
  final VoidCallback onTap;
  final double? height;
  final double? width;
  final ButtonStatus? status;
  final String label;
  final Alignment? contentAlignment;
  final Color? labelColor;
  final EdgeInsets? margin;
  final Widget? child;
  final BoxDecoration? decoration;
  const Button(
      {super.key,
      required this.color,
      required this.onTap,
      this.height = 60,
      this.width = double.maxFinite,
      this.status = ButtonStatus.ENABLED,
      required this.label,
      this.contentAlignment = Alignment.center,
      this.labelColor,
      this.margin = EdgeInsets.zero,
      this.child,
      this.decoration});

  @override
  Widget build(BuildContext context) {
    Widget _childBuilder(BuildContext context) {
      if (status == ButtonStatus.LOADING) {
        return Center(
          child: CircularProgressIndicator(
            color: color.computeLuminance() < 0.5
                ? Colors.white
                : Theme.of(context).colorScheme.primary,
          ),
        );
      }
      if (child != null) {
        return child!;
      }
      return Container(
        alignment: contentAlignment,
        child: Text(
          label,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: Theme.of(context)
              .textTheme
              .labelMedium!
              .copyWith(color: labelColor, fontSize: 16),
        ),
      );
    }

    Color _colorBuilder(BuildContext context) {
      if (status == ButtonStatus.DISABLED || status == ButtonStatus.LOADING) {
        return Theme.of(context).colorScheme.onSurface.withOpacity(.2);
      }
      return color;
    }

    Function()? _onTapBuilder() {
      if (status == ButtonStatus.DISABLED || status == ButtonStatus.LOADING) {
        return null;
      }
      return onTap;
    }

    return GestureDetector(
      onTap: _onTapBuilder(),
      child: Container(
        height: height,
        width: width,
        margin: margin,
        decoration: decoration,
        child: Material(
          type: MaterialType.button,
          borderRadius: BorderRadius.circular(50),
          color: _colorBuilder(context),
          child: _childBuilder(context),
        ),
      ),
    );
  }
}
