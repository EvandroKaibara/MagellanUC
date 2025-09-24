import { CompanyDescription } from "./components/CompanyDescription"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Partners } from "./components/Partners"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Header />
      <section id="company">
        <Services />
        <CompanyDescription />
        <Partners />
        <Contact />
      </section>
    </>
  )
}

export default App
