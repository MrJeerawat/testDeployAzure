import { Button, HStack } from "@chakra-ui/react"
import { FaFacebook, FaTwitter } from "react-icons/fa"


const FormPage = () => {
  return (
    <HStack>
       
        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
            Facebook
        </Button>
        <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
            Twitter
        </Button>
    </HStack>
  )
}

export default FormPage