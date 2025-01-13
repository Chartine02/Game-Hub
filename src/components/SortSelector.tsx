import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface SortSelectorProps {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectOrder, sortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-date", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Box position="relative">
      <MenuRoot positioning={{ placement: "bottom" }}>
        <MenuTrigger asChild>
          <Button variant="outline">
            Order by: {currentSortOrder?.label || "Relevance"}
            <BiChevronDown />{" "}
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute">
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default SortSelector;
