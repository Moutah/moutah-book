import { useEffect, useState } from "react";
import { Media } from "../models/media";
import styles from "./carousel.module.css";

export type CarouselProps = {
  medias: Media[];
  title: string;
};

export default function Carousel({ medias, title }: CarouselProps) {
  const [activeMediaI, setActiveMediaI] = useState(0);
  const [nextMediaI, setNextMediaI] = useState(0);

  const activateMedia = (newI: number) => {
    // ignore rapid click
    if (nextMediaI !== activeMediaI) return;

    // mark next media
    setNextMediaI(newI);

    // update active media after animation
    setTimeout(() => {
      setActiveMediaI(newI);
    }, 1000);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {medias.map((media, i) => (
          <div
            className={
              styles.carouselItem +
              " " +
              (i === activeMediaI ? styles.active : "") +
              " " +
              (i === nextMediaI ? styles.next : "") +
              " " +
              (i < nextMediaI ? styles.hideLeft : "") +
              " " +
              (i > nextMediaI ? styles.hideRight : "")
            }
            key={i}
          >
            {media.type === "video" ? (
              <video
                preload="metadata"
                src={media.url}
                muted={true}
                controls={true}
                key={i}
                className={styles.carouselMedia}
              ></video>
            ) : (
              <img
                src={media.url}
                alt={title}
                className={styles.carouselMedia}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.carouselIndicators}>
        {medias.map((slide, i) => (
          <button
            type="button"
            className={
              styles.carouselIndicator +
              " " +
              (i === nextMediaI ? styles.active : "")
            }
            key={i}
            onClick={() => activateMedia(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
