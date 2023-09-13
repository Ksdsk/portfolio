import Image from 'next/image'
import Chat from './chat'

export default function Home() {
  return (
    <main className="bg-cover min-h-screen flex justify-center">
      <div id="container" className="container bg-black flex flex-col justify-between py-12">
        <div className=''>
          
        </div>
        <div className=''>
          <Chat/>
        </div>
      </div>
    </main>
  )
}
