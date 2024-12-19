import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
