import About from "./component/About"
import Contact from "./component/Contact"
import Features from "./component/Features"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Story from "./component/Story"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
