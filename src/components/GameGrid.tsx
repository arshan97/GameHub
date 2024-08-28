import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 2, md: 2, lg: 4, xl: 5}} spacing={10} padding={"20px"}>
        {isLoading && skeletons.map(() => <GameCardSkeleton />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;