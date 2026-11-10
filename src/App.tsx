import './App.css'
import Logo from './assets/mdLogo.svg?react'

function App() {
  return (
    <>
      <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
        <div>
          <Logo className="w-64 h-64 mx-auto fill-purple-200 drop-shadow-purple-50/40 drop-shadow-2xl" />
          <h1 className="text-2xl text-center font-light text-purple-200">Your partner in user delight</h1>
        </div>
      </section>
    </>
  )
}

export default App
