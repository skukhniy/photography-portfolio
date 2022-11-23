import MainDisplay from './components/MainDisplay';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainDisplay />
    </div>
  );
}

export default App;
