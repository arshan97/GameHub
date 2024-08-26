import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <p>{game.name}</p>
      ))}
    </>
  );
};

export default GameGrid;
