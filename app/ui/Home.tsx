import { iBM_Plex_Mono } from "@/app/ui/fonts"
import {motion,useAnimation} from 'framer-motion'
import { useEffect, useState } from "react"
import '@/app/styles/Home.css'

export default function Home() {

    const [typedText, setTypedText] = useState<string[]>([])
    const controls = useAnimation()
  
    const fullText = "Hello there!👋\n I'm amatatu!"
    useEffect(() => {
        const typeText = async () => {
          await controls.start({ opacity: 1 })
          const lines = fullText.split("\n")
    
          for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const line = lines[lineIndex];
            for (let charIndex = 0; charIndex <= line.length; charIndex++) {
              setTypedText(prev => {
                const newLines = [...prev];
                newLines[lineIndex] = line.slice(0, charIndex);
                console.log(newLines)
                return newLines;
              })
              await new Promise(resolve => setTimeout(resolve, 80))
            }
            if (lineIndex < lines.length - 1) {
              setTypedText(prev => [...prev, ''])
            }
          }
        }
        typeText()
      }, [controls, fullText])

    return(
    <section id="hello"
          className=" flex flex-col items-center justify-center min-h-screen relative text-left lg:text-center"
        >
          <div className='mb-[7rem]  flex flex-col items-center '>
            <motion.h1
              className={`${iBM_Plex_Mono.className} text-6xl font-bold my-10 lg:text-7xl  `}
              initial={{ opacity: 0 }}
              animate={controls}
            >
              {typedText.map((line, index) => (
                <span key={index} className="block">
                  {index == 1 ? (
                    <>
                      <span className="inline-block ">{line.slice(0, 4)}</span>
                      <span className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 md:text-8xl lg:text-9xl" style={{
                        backgroundImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f43f5e, #ef4444, #f59e0b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '400% 400%',
                        animation: 'gradient 15s ease infinite',
                      }}>
                        {line.slice(4)}
                      </span>
                    </>
                  ) : (
                    <span className=''>{line}</span>
                  )
                  }
                </span>
              ))}
            </motion.h1>
          </div>

          <div className=' c-scrolldown'>
            <div className='c-line'></div>
          </div>
        </section>
    )
}