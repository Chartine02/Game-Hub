import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeletons";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <List.Root>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      {data.map((genre) => {
        return (
          <List.Item key={genre.id} listStyle="none" paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List.Item>
        );
      })}
    </List.Root>
  );
};

export default GenreList;
