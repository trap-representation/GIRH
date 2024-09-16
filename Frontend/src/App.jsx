import React from 'react'
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Contact from './pages/Contact'
import About_us from './pages/About_us'
import License from './pages/License'
import Research from './pages/Research'
import Start_up from './pages/Start_up'
import Real_time_chat from './pages/Real_time_chat'
import Resources from './pages/Resources'
import PatentList from './Researches/PatentList'
import PatentApplication from './Researches/PatentApplication'
import ResearchProject from './Researches/ResearchProjects'
import IntellectualProperty from './Researches/IntellectualProperty'
import FundingRequest from './Researches/FundingRequest'
import FundingHistory from './Researches/FundingHistory'
import Startup_PatentLists from './Start-ups/Startup_PatentLists'
import Startup_PatentApplication from './Start-ups/Startup_PatentApplication'
import Startup_ResearchProjects from './Start-ups/Startup_ResearchProjects'
import Startup_IntellectualProperty from './Start-ups/Startup_IntellectualProperty'
import Startup_FundingRequest from './Start-ups/Startup_FundingRequest'
import Startup_FundingHistory from './Start-ups/Startup_FundingHistory'
import Startup_FourarmsGroup from './Start-ups/Startup_FourarmsGroup'
import Startup_Sales from './Start-ups/Startup_Sales'
import Login from './components/Login'


const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutus' element={<About_us/>}/>
      <Route path='/license' element={<License/>}/>
      <Route path='/research' element={<Research/>}/>
      <Route path='/startup' element={<Start_up/>}/>
      <Route path='/chats' element={<Real_time_chat/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/patent' element={<PatentList/>}/>
      <Route path='/patentapplication' element={<PatentApplication/>}/>
      <Route path="/researchprojects" element={<ResearchProject/>} />
      <Route path="/intellectualproperty" element={<IntellectualProperty/>} />
      <Route path="/fundingrequest" element={<FundingRequest/>} />
      <Route path="/fundinghistory" element={<FundingHistory/>} />
      <Route path="/community" element={"#"} />
      <Route path="/startup_patent" element={<Startup_PatentLists/>} />
      <Route path="/startup_patentapplication" element={<Startup_PatentApplication/>} />
      <Route path="/startup_researchprojects" element={<Startup_ResearchProjects/>} />
      <Route path="/startup_intellectualproperty" element={<Startup_IntellectualProperty/>} />
      <Route path="/startup_fundingrequest" element={<Startup_FundingRequest/>} />
      <Route path="/startup_fundinghistory" element={<Startup_FundingHistory/>} />
      <Route path="/startup_fourarmsgroup" element={<Startup_FourarmsGroup/>} />
      <Route path="/startup_sales" element={<Startup_Sales/>} />
    </Routes>
    </div>
    
    </>
  )
}

export default App

