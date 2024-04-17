'use client'
import React, { useRef } from 'react'
import Header from '../Header'
import Card from '../Card'
import { useScroll, useTransform } from 'framer-motion'
import { ContainerScrollAnimationProps } from '@/lib/types'


const ContainerScrollAnimation = ({titleComponent}: ContainerScrollAnimationProps) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  )
}

export default ContainerScrollAnimation