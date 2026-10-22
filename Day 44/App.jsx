import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from "./Components/Task1.jsx";
import Navbar from "./Components/Task2.jsx";
import Products from "./Components/Task3.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section id="home" className="px-6 py-12">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900">
          Welcome to  Shopwhare
        </h1>

        <ProfileCard />
      </section>

      <section id="about" className="py-4">
        <Products />
      </section>

      <section id="services" className="p-6 text-center">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-600">
          Quality products and a great shopping experience.
        </p>
      </section>

      <footer
        id="contact"
        className="bg-slate-900 p-6 text-center text-white"
      >
        Contact us | @2026 Shopwhare
      </footer>
    </div>


    </>
  )
}

export default App;
