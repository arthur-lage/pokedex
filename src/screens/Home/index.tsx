import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";

import { styles } from "./styles";

import SearchIcon from "../../assets/images/icons/search.svg";
import GenerationIcon from "../../assets/images/icons/generation.svg";
import SortIcon from "../../assets/images/icons/sort.svg";
import FilterIcon from "../../assets/images/icons/filter.svg";
import PokeballImage from "../../assets/images/icons/pokeball.png";

import { PokemonCard } from "../../components/PokemonCard";

import { FlatList } from "react-native-gesture-handler";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { api } from "../../services/api";
import { COLORS } from "../../theme/colors";

interface IPokemonType {
  type: {
    name: string;
  };
}

interface IPokemon {
  id: number;
  name: string;
  image: any;
  types: IPokemonType[];
}

interface IPokemonRequest {
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([]);
  const [hasFinishedFetchingPokemons, setHasFinishedFetchingPokemons] =
    useState<boolean>(false);

  const [numberOfFetchedPokemons, setNumberOfFetchedPokemons] =
    useState<number>(0);
  const numberOfPokemons = 542;

  const opacity = useState(new Animated.Value(0))[0];

  const isBlurry = false;

  const fadePokeball = () => {
    Animated.loop(
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    fadePokeball();

    api
      .get<IPokemonRequest>(`/pokemon?limit=${numberOfPokemons}`)
      .then(async (res) => {
        return Promise.all(
          res.data.results.map((pokemon) => {
            return api.get(pokemon.url).then((res) => {
              const newPokemon = {
                id: res.data.id,
                name: res.data.name,
                image: res.data.sprites.other["official-artwork"].front_default,
                types: res.data.types,
              };

              setNumberOfFetchedPokemons((prev) => prev + 1);

              return newPokemon;
            });
          })
        ).then((res) => {
          setPokemons(res);
          setHasFinishedFetchingPokemons(true);
        });
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.options}>
            <TouchableOpacity activeOpacity={0.5} style={styles.option}>
              <GenerationIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.option}>
              <SortIcon />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.option,
                {
                  marginRight: 0,
                },
              ]}
            >
              <FilterIcon />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Pok??dex</Text>
          <Text style={styles.description}>
            Search for Pok??mon by name or using the National Pok??dex number.
          </Text>
          <View style={styles.searchBarWrapper}>
            <SearchIcon width={16} height={16} style={styles.searchBarIcon} />
            <TextInput
              style={styles.searchBar}
              placeholderTextColor={COLORS.text.gray}
              placeholder="What Pok??mon are you looking for?"
            />
          </View>
        </View>

        {hasFinishedFetchingPokemons ? (
          <>
            {pokemons && (
              <FlatList
                style={styles.pokemonList}
                data={pokemons}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <PokemonCard
                    number={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    types={item.types}
                  />
                )}
              />
            )}
          </>
        ) : (
          <View style={styles.loading}>
            <Animated.Image
              style={[
                {
                  opacity,
                },
              ]}
              source={PokeballImage}
            />
            <Text style={styles.loadingText}>
              Loading pok??mons -{" "}
              {`${Number(
                (numberOfFetchedPokemons / numberOfPokemons) * 100
              ).toFixed(0)}%`}{" "}
            </Text>
          </View>
        )}
      </View>
    </>
  );
}

export { Home };
