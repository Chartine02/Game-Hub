import { Badge } from "@chakra-ui/react";

interface CriticScoreProperties {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProperties) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
