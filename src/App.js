import './App.css';
import Footer from './components/Home/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
