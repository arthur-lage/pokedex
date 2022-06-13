import React from "react";
import { View } from "react-native";
import { typeIcons } from "../../constants/types";
import { styles } from "./styles";

type Props = {
  name: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
};

function TypeIcon({
  name,
  width = 15,
  height = 15,
  color = "#fff",
  backgroundColor = "transparent",
}: Props) {
  let Icon;

  //@ts-ignore
  Icon = typeIcons[name];

  return (
    <View
      style={[
        styles.typeIcon,
        {
          backgroundColor,
        },
      ]}
    >
      <Icon
        width={width}
        height={height}
        style={{
          color,
        }}
      />
    </View>
  );
}

export { TypeIcon };
