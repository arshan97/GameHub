import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/game-control.webp"
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
    <HStack padding="20px" justifyContent="space-between">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar