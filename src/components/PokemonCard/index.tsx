import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { COLORS } from "../../theme/colors";

import PokeballIcon from "../../assets/images/icons/pokeball-card.svg";
import CirclesIcon from "../../assets/images/icons/circles-card.svg";

import { styles } from "./styles";
import { SvgProps } from "react-native-svg";

type PokemonType = {
  name: string;
  color: string;
  icon: React.FC<SvgProps>;
};

type PokemonCardProps = TouchableOpacityProps & {
  number: number;
  name: string;
  image: React.FC<SvgProps>;
  types: PokemonType[];
};

function PokemonCard({
  number,
  name,
  image: Image,
  types,
  ...rest
}: PokemonCardProps) {
  let formatedNumber = number.toString().padStart(3, "0");

  return (
    <TouchableOpacity activeOpacity={0.6} {...rest} style={styles.pokemonWrapper}>
      <View style={styles.pokemonInfo}>
        <Text style={styles.pokemonNumber}>#{formatedNumber}</Text>
        <Text style={styles.pokemonName}>{name}</Text>
        <CirclesIcon style={styles.circlesIcon} />

        <View style={styles.typeWrapper}>
          {types.map((type, index) => (
            <>
              <View
                key={index}
                style={[
                  styles.type,
                  {
                    //@ts-ignore
                    backgroundColor: COLORS.types[type.color],
                  },
                ]}
              >
                <type.icon style={styles.typeIcon} />
                <Text style={styles.typeText}>{type.name}</Text>
              </View>
            </>
          ))}
        </View>
      </View>
      <PokeballIcon style={styles.pokeballIcon} width={145} height={145} />

      <Image style={styles.pokemonImage} width={130} height={130} />
    </TouchableOpacity>
  );
}

export { PokemonCard };
