import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProperties {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProperties) => {
  return (
    <Box width="400px" borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
