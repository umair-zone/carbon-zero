import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';


function App() {
  return (
    <Routes >
      <Route path="projects" element={<Projects/>}></Route>
      <Route path="projects/:projectId/reports" element={<Projects/>}></Route>
      <Route path="projects/" element={<Projects/>}></Route>
      <Route path="reports/create" element={<Projects/>}></Route>
      <Route exact path=""> 
        <Navigate to="projects"></Navigate>
      </Route> 
    </Routes>
   
  );
}

export default App;
