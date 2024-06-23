import './styles/font-awesome.min.css';
import './styles/themify-icons.css';
import './styles/flaticon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './styles/globals.css';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import OurTeam from './components/pages/OurTeam';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Ssgeneral from './components/pages/Ssgeneral';
import Sdpi from './components/pages/Sdpi';
import Smena from './components/pages/Smena';
import Sreab from './components/pages/Sreab';
import OurPartners from './components/pages/OurPartners';
import Contactpage from './components/pages/Contactpage';
import Contactform from './components/Contactform';


function App() {

  const { i18n } = useTranslation();

  return (
    <>
    <Router >
      <Header Lang={i18n.language}/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/ourpartners" element={<OurPartners/>}></Route> 
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contactpage />}></Route>
        <Route path="/contactform" element={<Contactform/>}></Route>
        <Route path="/ourteam" element={<OurTeam />}></Route>
        <Route path="/ssg" element={<Ssgeneral/>}></Route> 
        <Route path="/sdpi" element={<Sdpi/>}></Route> 
        <Route path="/smena" element={<Smena/>}></Route>
        <Route path="/sreab" element={<Sreab/>}></Route>

      </Routes>
    </Router>
  </> 
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
