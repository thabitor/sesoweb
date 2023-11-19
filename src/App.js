import './styles/font-awesome.min.css';
import './styles/themify-icons.css';
import './styles/flaticon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './styles/globals.css';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


function App() {

  const { i18n } = useTranslation();

  return (
    <>
    <Router >
      <Header Lang={i18n.language}/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/services" element={<Services />}></Route> 
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
