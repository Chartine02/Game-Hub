import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p>{error}</p>}
      {
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} gap="3">
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />{" "}
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />{" "}
            </GameCardContainer>
          ))}
        </SimpleGrid>
      }
    </>
  );
};

export default GameGrid;
