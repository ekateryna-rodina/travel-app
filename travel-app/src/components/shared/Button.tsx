import React, { PropsWithChildren, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  width: number;
  height: number;
  title: string;
  backgroundColor: string;
  color: string;
  handler: () => void;
  children: ReactNode;
}
const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { handler, width, height, color, backgroundColor, children } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        width,
        height,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handler}
    >
      <Text style={{ color }}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Button;
