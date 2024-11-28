import Header from './component/header/Header'
import Hero from './component/hero/Hero'
import Main from './component/main/Main'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div className='container'>
    <Header/>
    <Hero/>
    <div className='ider'/>
    <Main/>
    <div className='ider'/>
    <Contact/>
    <div className='ider'/>
    <Footer/>
    </div>
  )
}

export default App
