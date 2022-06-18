// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0

import { useState } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
//import { Route, Routes , Navigate } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css'; 
import NewReportCement from './pages/NewReportCement';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import EmissionReport from './pages/EmissionReport';
import Reports from './pages/Reports';
import { PublicClientApplication } from '@azure/msal-browser';
import { config} from './authConfig'
import Welcome from './pages/Welcome';
import axios from 'axios';



function App() {

  const [isAuthenticated , setAuthenticated] = useState(false)
  const [account , setAccount] = useState({})

  const puplicClientApplication = new PublicClientApplication({
    "auth": { clientId : config.appId , redirectUri: config.redirectUrl , authority: config.authority},
    "cache": { cacheLocation: 'sessonStorage' , storeAuthStateInCookie: true}
  })

  const login = async () => {
    try{
        const response = await puplicClientApplication.loginPopup(
          { scopes: config.scopes , prompt: "select_account"}
        )
        setAuthenticated(true)
        console.log(response)
        axios.defaults.headers.common['Authorization'] = response.idToken;
        setAccount({name : response.account.name})
      }catch(err){
      setAuthenticated(false)
    }
  }

  const logout = () => {
    puplicClientApplication.logoutPopup();
  }

  return (
    <>
      { isAuthenticated ? <> 
      <Navbar logout={logout} user={account.name}></Navbar>
      <Routes >
        <Route path="" element={<Navigate to="projects" replace="projects"></Navigate>}  ></Route>
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="projects/:projectId/reports" element={<Reports/>}></Route>
        <Route path="reports/:reportId" element={<EmissionReport></EmissionReport>}></Route>
        <Route path="projects/:projectId/reports/create" element={<NewReportCement/>}></Route>
      </Routes> 
      </>: <Welcome login = {() => login()}></Welcome> }
    </>
   
  );
}

export default App;
