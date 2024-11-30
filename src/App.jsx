import About from "./component/About"
import Home from "./component/Home"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
    </main>
  )
}

export default App
