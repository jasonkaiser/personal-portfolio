import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Intro = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    document.body.classList.add('overflow-hidden')
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('overflow-hidden')
          document.getElementById("intro-slider2")?.classList.add("hidden")
        }
      })

      t1.from('#intro-slider', {
        xPercent: '-100',
        duration: 0.6,
        delay: 0.3

      })

        .from(['#title-1', '#title-2'], {
          opacity: 0,
          yPercent: 30,
          stagger: 0.5

        })

        .to(['#title-1', '#title-2'], {
          opacity: 0,
          y: '-=30',
          delay: 0.3,
          stagger: 0.5

        })

        .from('#title-3', {
          opacity: 0,
          yPercent: 30

        })

        .to('#intro-slider', {
          clipPath: 'circle(0% at 50% 50%)',
          opacity: 0,
          duration: 1.4,
          ease: 'power2.inOut'

        }).to('#intro-slider2', {
          opacity: 0

        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    
    <div className="relative" ref={comp}>
      <div
        id="intro-slider2"
        className="h-screen bg-white absolute top-0 left-0 z-100 w-full flex">

        <div
          id="intro-slider"
          className="bg-purple-600 top-0 left-0 flex flex-col justify-center gap-10 w-full"
          style={{ clipPath: 'circle(100% at 50% 50%)' }}>

          <h1
            id="title-1"
            className="text-9xl font-bold text-white mx-30 max-lg:text-6xl max-lg:text-left max-lg:mx-10">
            Fullstack Developer

          </h1>
          <h1
            id="title-2"
            className="text-8xl font-bold text-purple-950 mx-30 max-lg:text-4xl max-md:text-right max-lg:mx-10">
            Designer

          </h1>
          <h1
            id="title-3"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl max-sm:text-4xl max-lg:text-6xl font-bold text-white text-center w-full">
            {'{'} Problem-Solver {'}'}

          </h1>
        </div>
      </div>
    </div>
  )
}

export default Intro
