'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function CatComponent() {
  const [imageName, setImageName] = useState('./cat-still.gif')

  const spin = (sound) => {
    const audio = new Audio(`/sounds/${sound}1.m4a`)
    audio.play()
    setImageName('./cat-moving.gif')
    setTimeout(() => setImageName('./cat-still.gif'), 500)
  }

  return (
    <div className='flex flex-col items-center'>
      <Image src={imageName} width='300' height='300' alt='cat' />
      <div>
        <button
          onClick={() => spin('oo')}
          type='button'
          className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          OO
        </button>
        <button
          onClick={() => spin('ee')}
          type='button'
          className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          EE
        </button>
        <button
          onClick={() => spin('aa')}
          type='button'
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          AA
        </button>
      </div>
    </div>
  )
}
