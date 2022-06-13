import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css'; 
import NewReportCement from './pages/NewReportCement';
import NewReportHighway from './pages/NewReportHighway';
import NewReportPowerPlant from './pages/NewReportPowerPlant';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import EmissionReport from './pages/EmissionReport';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes >
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="projects/:projectId/reports" element={<Projects/>}></Route>
        <Route path="projects/:projectId/reports/:reportId" element={<EmissionReport></EmissionReport>}></Route>
        <Route path="projects/" element={<Projects/>}></Route>
        <Route path="projects/:projectId/reports/create" element={<NewReportPowerPlant/>}></Route>
        {/* <Route exact path=""> 
          <Navigate to="projects"></Navigate>
        </Route>  */}
      </Routes>
    </>
   
  );
}

export default App;
