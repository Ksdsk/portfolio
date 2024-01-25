import Chat from './chat'
import Header from './layouts/header'
import MainContent from './content/main'

export default function Home() {
  return (
    <>
      <main className="flex h-screen justify-center bg-zinc-900 overflow-hidden">
        <div id="container" className="relative flex flex-col sm:mt-12 mb-12 container">

            <Header/>
            <Chat/>


            <div className='overflow-y-scroll z-10 sm:rounded-3xl'>
              <div className='min-h-screen'>
                <MainContent/>
              </div>
            </div>
        </div>

      </main>
    </>

  )
}
