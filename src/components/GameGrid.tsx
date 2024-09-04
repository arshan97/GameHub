import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 2, md: 2, lg: 4, xl: 5}} spacing={10} padding={"20px"}>
        {isLoading && skeletons.map(() => <GameCardContainer><GameCardSkeleton /></GameCardContainer>)}
        {data.map((game) => (
          <GameCardContainer><GameCard game={game} key={game.id} /></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;