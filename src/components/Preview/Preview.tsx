import { useState } from "react"
import { Loader } from ".."

interface Props {
    image: string;
    size?: "large" | "small";
}

export function Preview({image, size="small"}:Props ) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <>
    {isLoading && (<Loader variant={size}/>)}
    <img decoding='async' src={image} alt="Product" onLoad={() => setIsLoading(false)} style={isLoading? {opacity: "0"} : {}}/>
    </>    
  )
}