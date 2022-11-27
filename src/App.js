import MainDisplay from './components/MainDisplay';
import NavBar from './components/NavSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import NavSidebar from './components/NavSidebar';

function App() {
  return (
    <div className="App">
      <NavSidebar />
      <MainDisplay />
    </div>
  );
}

export default App;
