import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>Still loading....</p>}
      {
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="10">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      }
    </>
  );
};

export default GameGrid;
