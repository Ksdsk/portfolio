import Image from 'next/image'
import Chat from './chat'
import Header from './header'

export default function Home() {
  return (
    <main className="bg-cover h-screen flex justify-center overflow-hidden">
      <div id="container" className="container bg-black flex flex-col justify-between py-20">
        <div className=''>
          <Header/>
        </div>
        <div className='border-t border-white'>
          <div className='h-4 bg-black blur-2xl relative top-6'>
          </div>
          <Chat/>
        </div>
      </div>
    </main>
  )
}
