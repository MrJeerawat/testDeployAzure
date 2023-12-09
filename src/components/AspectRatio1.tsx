import { AspectRatio } from "@chakra-ui/react"

const AspectRatio1 = () => {
  return (
    <>
        <AspectRatio  ratio={1} maxWidth={500} maxHeight={500}>
        <iframe
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
        />
        </AspectRatio>
    </>
  )
}

export default AspectRatio1