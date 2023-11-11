// import 'react-toastify/dist/ReactToastify.css';
import './styles/font-awesome.min.css';
import './styles/themify-icons.css';
import './styles/flaticon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './styles/globals.css'
import './styles/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';
import Header from './components/Header';
// import HeaderTop from './components/HeaderTop';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </Router>
  </> 
  )
}

export default App;
