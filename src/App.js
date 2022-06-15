import { Route, Routes} from 'react-router-dom';
//import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css'; 
import NewReportPowerPlant from './pages/NewReportPowerPlant';
import NewReportCement from './pages/NewReportCement';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import EmissionReport from './pages/EmissionReport';
import Reports from './pages/Reports';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes >
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="projects/:projectId/reports" element={<Reports/>}></Route>
        <Route path="projects/:projectId/reports/:reportId" element={<EmissionReport></EmissionReport>}></Route>
        <Route path="projects/:projectId/reports/create" element={<NewReportCement/>}></Route>
        {/* <Route exact path=""> 
          <Navigate to="projects"></Navigate>
        </Route>  */}
      </Routes>
    </>
   
  );
}

export default App;
