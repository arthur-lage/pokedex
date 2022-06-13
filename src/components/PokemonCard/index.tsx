import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image,
} from "react-native";

import { COLORS } from "../../theme/colors";

import PokeballIcon from "../../assets/images/icons/pokeball-card.svg";
import CirclesIcon from "../../assets/images/icons/circles-card.svg";

import { styles } from "./styles";

import { TypeIcon } from "../TypeIcon";

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonCardProps = TouchableOpacityProps & {
  number: number;
  name: string;
  image: string;
  types: PokemonType[];
};

function PokemonCard({
  number,
  name,
  image,
  types,
  ...rest
}: PokemonCardProps) {
  let formatedNumber = number.toString().padStart(3, "0");

  // let TypeIcon = typeIcons[types.type.name];

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...rest}
      style={[
        styles.pokemonWrapper,
        {
          //@ts-ignore
          backgroundColor: COLORS.typeBackgrounds[types[0].type.name],
        },
      ]}
    >
      <View style={styles.pokemonInfo}>
        <Text style={styles.pokemonNumber}>#{formatedNumber}</Text>
        <Text style={styles.pokemonName}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <CirclesIcon style={styles.circlesIcon} />

        <View style={styles.typeWrapper}>
          {types.map((type, index) => (
            <View
              key={index}
              style={[
                styles.type,
                {
                  //@ts-ignore
                  backgroundColor: COLORS.types[type.type.name],
                },
              ]}
            >
              <TypeIcon name={type.type.name} />
              <Text style={styles.typeText}>
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <PokeballIcon style={styles.pokeballIcon} width={145} height={145} />

      <Image
        source={{ uri: image }}
        style={[
          styles.pokemonImage,
          {
            width: 130,
            height: 130,
          },
        ]}
      />
    </TouchableOpacity>
  );
}

export { PokemonCard };
