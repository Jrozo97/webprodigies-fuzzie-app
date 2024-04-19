"use client";

import { useMouseEnter } from "@/hooks/useMouseEnter"
import { CardItemProps } from "@/lib/types.props"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    const handleAnimations = () => {
      if (!ref.current) return
      if (isMouseEntered) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      } else {
        ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
      }
    }
    handleAnimations()
  }, [isMouseEntered, rotateX, rotateY, rotateZ, translateX, translateY, translateZ])

  

  return (
    <Tag
      ref={ref}
      className={cn('w-fit transition duration-200 ease-linear', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default CardItem