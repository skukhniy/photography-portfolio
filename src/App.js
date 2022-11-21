import MainDisplay from './components/MainDisplay';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Photography Portfolio</h1>
      <MainDisplay />
    </div>
  );
}

export default App;
