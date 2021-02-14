import React, { PropsWithChildren, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

interface IButtonProps {
  width: number;
  height: number;
  backgroundColor: string;
  color?: string;
  handler: () => void;
}
const Button = (props: PropsWithChildren<IButtonProps>) => {
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
