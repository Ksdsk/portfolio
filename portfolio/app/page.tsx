import Chat from './chat'
import Header from './layouts/header'
import MainContent from './content/main'

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden justify-center bg-zinc-900">
      <div id="container" className="relative container flex flex-col my-12">
          <div className='border-b border-white p-6'>
            <Header/>
          </div>
          <div className='content overflow-y-scroll px-6 mb-6 mt-3'>
            <MainContent/>
          </div>
          
          


          <Chat/>

      </div>
    </main>
  )
}
