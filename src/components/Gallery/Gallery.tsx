import { useState } from 'react';
import styles from './Gallery.module.css' 

interface Props {
    images: string[]
}

export function Gallery({ images }: Props) {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className={styles.imageBox}>
        <div className={styles.bigImage}>
          <img src="/src/assets/photo.jpg" alt="Product" />
        </div>
        <div className={styles.gallery}>
            {images.map((image, index) => (
          <div key={index} className={`${styles.galleryItem} ${index === selected ? styles.selected : ""}`} onClick={() => setSelected(index)}>
            <img src={image} alt="Product" />
          </div>
            ))}
        </div>
      </div>
    )
}

