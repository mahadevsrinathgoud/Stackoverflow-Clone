import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Questions from './pages/Questions/Questions.jsx'
import AskQuestion from './pages/AskQuestions/AskQuestion.jsx'
import DisplayQuestion from './pages/Questions/DisplayQuestion.jsx'
const AllRoutes = () => {
  return (
    <Routes>
        <Route  exact path="/" element={<Home/>} />
        <Route exact path="/Auth" element={<Auth/>} />
        <Route exact path="/Questions" element={< Questions/>}/>
        <Route exact path="/AskQuestion" element={< AskQuestion/>}/>
        <Route exact path="/Questions/:id" element={<DisplayQuestion/>}/>
    </Routes>
  )
}
export default AllRoutes
