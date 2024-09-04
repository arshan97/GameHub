import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  setSelectedGenre: (genre: Genre) => void
}

const GenreList = ({setSelectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres()

    if(error) return null
    
    if(isLoading) return <Spinner />

  return (
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Image borderRadius={8} boxSize="32px" src={getCroppedImageUrl(genre.image_background)} />
                <Button variant='link' onClick={() => setSelectedGenre(genre)} fontSize='large'>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList