import GlobalStyle from '../../styles/themes/globalStyle'
import Header from '../../components/Header'
import Home from '../../components/Home'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import AboutMe from '../../components/AboutMe'
import Contact from '../../components/Contact'

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <GlobalStyle />
    </>
  )
}

export default HomePage
