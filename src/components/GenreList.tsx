import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeletons";

interface GenreListProperties {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProperties) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Heading as="h1" marginBottom={3} fontSize="3xl">
        Genres
      </Heading>
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
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  variant="plain"
                  whiteSpace=""
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
};

export default GenreList;
