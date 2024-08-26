import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/game-control.webp"

const Navbar = () => {
  return (
    <HStack padding="20px">
        <Image src={logo} boxSize="70px" />
    </HStack>
  )
}

export default Navbar