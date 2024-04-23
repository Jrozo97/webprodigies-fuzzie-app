import { MotionValue } from "framer-motion";
import { ConnectionTypes } from "./types";

export type HeaderProps = {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
};

export type CardProps = {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
};

export type ContainerScrollAnimationProps = {
  titleComponent: string | React.ReactNode;
};

export type InfiniteMovingCardsProps = {
  items: {
    href: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export type ProductCardProps = {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
};
export type HeroParallaxProps = {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
};

export type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export type CardContainerProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export type CardItemProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
};


export type ConnectionCardProps = {
  type: ConnectionTypes;
  icon: string;
  title: ConnectionTypes;
  description: string;
  callback?: () => void;
  connected?: {} & any;
};

export type PageConnectionsProps = {
  searchParams?: { [key: string]: string | undefined };
};
