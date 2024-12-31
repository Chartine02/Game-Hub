import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameCardProperties {
  game: Game;
}

const GameCard = ({ game }: GameCardProperties) => {
  return (
    <Card.Root borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
