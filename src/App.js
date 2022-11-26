import MainDisplay from './components/MainDisplay';
import NavBar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainDisplay />
    </div>
  );
}

export default App;
