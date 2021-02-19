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
  };
  handler: () => void;
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { handler, style, children } = props;
  const { width, height, color, backgroundColor, borderRadius } = style;
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        width,
        height,
        padding: StyleGuide.spacing / 3,
        borderRadius: borderRadius || 15,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handler}
    >
      <Text style={[{ color }, StyleGuide.typography.footnoteBold]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
