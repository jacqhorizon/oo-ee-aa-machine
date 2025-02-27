import Image from 'next/image'
import CatContainer from './cat-container'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <CatContainer />
    </div>
  )
}
