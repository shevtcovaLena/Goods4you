import { useState } from 'react';
import styles from './Gallery.module.css' 
import { Preview } from '..';

interface Props {
    images: string[]
}

export function Gallery({ images }: Props) {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className={styles.imageBox}>
        <div className={styles.bigImage}>
          {images && 
          <Preview image={images[selected]}/>
          }
        </div>
        <div className={styles.gallery}>
            {images?.map((image, index) => (
          <div key={index} className={`${styles.galleryItem} ${index === selected ? styles.selected : ""}`} onClick={() => setSelected(index)}>
            <Preview image={image}/>
          </div>
            ))}
        </div>
      </div>
    )
}

