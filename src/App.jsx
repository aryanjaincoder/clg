import { useState } from "react"
import "./app.scss"
import Topbar from "./compnents/topbar/Topbar"
import Menu from "./compnents/menu/Menu"
import Intro from "./compnents/intro/Intro"
import Portfolio from "./compnents/portfolio/Portfolio"
import Work from "./compnents/works/Work"
import Testimonials from "./compnents/testimonials/Testimonials"
import Contact from "./compnents/contact/Contact"

function App() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Work/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  )
}

export default App
