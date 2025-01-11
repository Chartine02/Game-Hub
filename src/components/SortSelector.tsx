import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const SortSelector = () => {
  return (
    <Box position='relative'>
      <MenuRoot positioning={{placement: 'bottom'}}>
        <MenuTrigger  >
          <Button variant="outline">
            Order by: Relevance
            <BiChevronDown />{" "}
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute" >
          <MenuItem value="names">Relevance</MenuItem>
          <MenuItem value="date">Date added</MenuItem>
          <MenuItem value="name">Name </MenuItem>
          <MenuItem value="date-release">Release date</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="averge">Average rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default SortSelector;
