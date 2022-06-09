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
      <Route path="reports" element={<Reports/>}></Route>
      <Route path="reports/create" element={<Projects/>}></Route>
      {/* <Route exact path=""> 
        <Navigate to="projects" ></Navigate>
      </Route>   */}
    </Routes>
   
  );
}

export default App;
