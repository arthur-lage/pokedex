import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import Bulbasaur from "../../assets/images/pokemons/bulbasaur.svg";
import Ivysaur from "../../assets/images/pokemons/ivysaur.svg";
import Venusaur from "../../assets/images/pokemons/venusaur.svg";

import SearchIcon from "../../assets/images/icons/search.svg";
import GenerationIcon from "../../assets/images/icons/generation.svg";
import SortIcon from "../../assets/images/icons/sort.svg";
import FilterIcon from "../../assets/images/icons/filter.svg";

import { PokemonCard } from "../../components/PokemonCard";

import GrassIcon from "../../assets/images/pokemonTypes/grass.svg";
import PoisonIcon from "../../assets/images/pokemonTypes/poison.svg";

import { FlatList } from "react-native-gesture-handler";

function Home() {
  const pokemons = [
    {
      number: 1,
      name: "Bulbasaur",
      image: Bulbasaur,
      types: [
        { name: "Grass", color: "grass", icon: GrassIcon },
        { name: "Poison", color: "poison", icon: PoisonIcon },
      ],
    },
    {
      number: 2,
      name: "Ivysaur",
      image: Ivysaur,
      types: [
        { name: "Grass", color: "grass", icon: GrassIcon },
        { name: "Poison", color: "poison", icon: PoisonIcon },
      ],
    },
    {
      number: 3,
      name: "Venusaur",
      image: Venusaur,
      types: [
        { name: "Grass", color: "grass", icon: GrassIcon },
        { name: "Poison", color: "poison", icon: PoisonIcon },
      ],
    },
    {
      number: 4,
      name: "Bulbasaur",
      image: Bulbasaur,
      types: [
        { name: "Grass", color: "grass", icon: GrassIcon },
        { name: "Poison", color: "poison", icon: PoisonIcon },
      ],
    },
    {
      number: 5,
      name: "Ivysaur",
      image: Ivysaur,
      types: [
        { name: "Grass", color: "grass", icon: GrassIcon },
        { name: "Poison", color: "poison", icon: PoisonIcon },
      ],
    },
    {
      number: 6,
      name: "Venusaur",
      image: Venusaur,
      types: [
        { name: "Grass", color: "grass", icon: GrassIcon },
        { name: "Poison", color: "poison", icon: PoisonIcon },
      ],
    },
  ];

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

          <Text style={styles.title}>Pokédex</Text>
          <Text style={styles.description}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>
          <View style={styles.searchBarWrapper}>
            <SearchIcon style={styles.searchBarIcon} />
            <TextInput
              style={styles.searchBar}
              placeholder="What Pokémon are you looking for?"
            />
          </View>
        </View>

        <FlatList
          style={styles.pokemonList}
          data={pokemons}
          keyExtractor={(item) => String(item.number)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PokemonCard
              number={item.number}
              key={item.number}
              name={item.name}
              image={item.image}
              types={item.types}
            />
          )}
        />
      </View>
    </>
  );
}

export { Home };
