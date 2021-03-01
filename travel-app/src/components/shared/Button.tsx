import React, { PropsWithChildren, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import StyleGuide from "../../styles/StyleGuide";

interface IButtonProps {
  style: {
    width: number;
    height: number;
    backgroundColor: string;
    color?: string;
    borderRadius?: number;
    textTransform?: string;
    fontSize?: number;
  };
  handler: () => void;
  disabled?: boolean;
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { handler, disabled, style, children } = props;
  const {
    width,
    height,
    color,
    backgroundColor,
    borderRadius,
    textTransform,
    fontSize,
  } = style;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disabled
          ? StyleGuide.palette.darkTransparent
          : backgroundColor,
        width,
        height,
        padding: StyleGuide.spacing / 3,
        borderRadius: borderRadius || 15,
        justifyContent: "center",
        alignItems: "center",
      }}
      disabled={disabled}
      onPress={handler}
    >
      <Text
        style={[
          StyleGuide.typography.footnoteBold,
          { color, fontSize: fontSize },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
