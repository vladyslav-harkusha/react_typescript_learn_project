import { FC, ReactElement } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  children: ReactElement[];
}

export const Card: FC<CardProps> =
  ({
    width,
    height,
    variant,
    children,

  }) => {

  return (
    <div 
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "2px solid teal" : "none",
        background: variant === CardVariant.primary ? "wheat" : "none",
      }}
    >
      {children}
    </div>
  )
};
