import React from "react";
import Image from "next/image";
import "./card.css";

export interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  isImage?: boolean;
  imagePosition?: "top" | "bottom" | "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const Card = ({
  className,
  title,
  description,
  isImage = false,
  imagePosition,
  imageSrc = '/assets.png',
  imageAlt = 'card-image',
  imageWidth = 300,
  imageHeight = 200,
}:CardProps) => {
  return (
    <div className={['card-wrapper', `card-image-position--${imagePosition}`, className].join(' ')}>
      {isImage && <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
