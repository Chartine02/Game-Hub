import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          Platforms <BiChevronDown />{" "}
        </Button>
      </MenuTrigger>
      <MenuContent width="200px" zIndex={10} position="absolute">
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.slug}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
