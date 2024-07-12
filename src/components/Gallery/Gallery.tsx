import { useState } from 'react';
import styles from './Gallery.module.css' 

interface Props {
    images: string[]
}

function Preview({image}: {image: string}) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <>
    {isLoading && (<div className="loader"></div>)}
    <img decoding='async' src={image} alt="Product" onLoad={() => setIsLoading(false)} style={isLoading? {opacity: "0"} : {}}/>
    </>
    
  )
}

export function Gallery({ images }: Props) {
    const [selected, setSelected] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    return (
        <div className={styles.imageBox}>
        <div className={styles.bigImage}>
          {isLoading && (<div className="loader"></div>)}
          {images && <img decoding='async' src={images[selected]} alt="Product" onLoad={() => setIsLoading(false)} style={isLoading? {opacity: "0"} : {}}/>}
        </div>
        <div className={styles.gallery}>
            {images?.map((image, index) => (
          <div key={index} className={`${styles.galleryItem} ${index === selected ? styles.selected : ""}`} onClick={() => setSelected(index)}>
            <Preview image={image}/>
          {/* <img decoding='async' src={image} alt="Product" onLoad={() => setIsLoaded(true)}/> */}
          </div>
            ))}
        </div>
      </div>
    )
}

