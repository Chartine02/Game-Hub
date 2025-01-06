import { HStack, Skeleton, Stack } from "@chakra-ui/react";
import { SkeletonCircle } from "./ui/skeleton";

const GenreSkeleton = () => {
  return (
    <HStack gap="2" paddingY={1}>
      <SkeletonCircle size="10" />
      <Stack flex="1">
        <Skeleton height="5" />
      </Stack>
    </HStack>
  );
};

export default GenreSkeleton;
