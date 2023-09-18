import Chat from './chat'

export default function Home() {
  return (
    <main className="bg-cover h-screen flex justify-center dark:bg-black bg-blue-50">
      <div id="container" className="container dark:bg-black  bg-blue-50 flex flex-col justify-between md:py-20 sm:py-0">
        <div className='dark:bg-white/5 bg-blue-900/5 md:rounded-3xl py-6 h-full'>
          <Chat/>
        </div>
      </div>
    </main>
  )
}
