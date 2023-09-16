import Image from 'next/image'
import Chat from './chat'
import Header from './header'

export default function Home() {
  return (
    <main className="bg-cover h-screen flex justify-center">
      <div id="container" className="container bg-black flex flex-col justify-between py-20">
        <div className='bg-white/5 rounded-3xl py-6 h-full'>
          <Chat/>
        </div>
      </div>
    </main>
  )
}
