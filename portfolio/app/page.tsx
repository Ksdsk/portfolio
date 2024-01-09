import Chat from './chat'
import Header from './layouts/header'
import MainContent from './content/main'

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden justify-center bg-zinc-900">
      <div id="container" className="relative border rounded-3xl border-white container flex flex-col my-12">
          <div className='border-b border-white p-6'>
            <Header/>
          </div>
          <div className='content overflow-y-scroll px-6 mb-6 mt-3'>
            <MainContent/>
          </div>
          
          <div className='float-right p-6 absolute z-10 right-0 bottom-0'>
            <div className='chatbox border rounded-2xl border-white'>
              <Chat/>
            </div>
          </div>
      </div>
    </main>
  )
}
