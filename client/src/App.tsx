import './App.css';
import Header from './layout/Header/Header';
import Boost from './layout//Boost/Boost';
import Footer from './layout/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div>
      <div className='App1'>
        <Header />
      </div>
      <Router>
        <AllRoutes />
      </Router>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
