<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { Route, Routes} from 'react-router-dom';
//import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import Reports from './pages/Reports';


function App() {
  return (
    <Routes >
      <Route path="projects" element={<Projects/>}></Route>
      <Route path="projects/:projectId/reports" element={<Reports/>}></Route>
      <Route path="projects/" element={<Projects/>}></Route>
      <Route path="reports/" element={<Reports/>}></Route>
      <Route path="reports/create" element={<Projects/>}></Route>
      {/* <Route exact path=""> 
        <Navigate to="projects" ></Navigate>
      </Route>   */}
    </Routes>
   
>>>>>>> Stashed changes
  );
}

export default App;
