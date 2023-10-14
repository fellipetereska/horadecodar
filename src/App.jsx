import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Import Pages
import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NewProject from './Components/pages/NewProject';
import Projects from './Components/pages/Project';

// Import Components
import Navbar from './Components/layout/Navbar'
import Container from './Components/layout/container';
import Footer from './Components/layout/Footer';

//Function App
function App() {

  return (
    <Router> 
      {/* Menu */}
      <Navbar />
      {/* Container Principal */}
      <Container customClass="min-height">
        {/* Define quais serão as rotas */}
        <Routes>
          {/* ROtas */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      {/* Rodapé */}
      <Footer />
    </Router>
  );
}

export default App;
