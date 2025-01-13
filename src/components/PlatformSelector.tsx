import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface PlatformSelectorProps {
  onSelectPlatform: (Platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box position="relative">
      <MenuRoot positioning={{ placement: "bottom" }}>
        <MenuTrigger asChild>
          <Button variant="outline">
            {selectedPlatform?.name || "Platforms"} <BiChevronDown />{" "}
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute">
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
              value={platform.slug}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
