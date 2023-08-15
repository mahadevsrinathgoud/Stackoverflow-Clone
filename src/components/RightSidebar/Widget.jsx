import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.png'
import message from '../../assets/message.png'
import blacklogo from '../../assets/blacklogo.png'
const Widget = () => {
  return (
    <div className='widget'>
    <h5>The Overflow Blog</h5>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-3'>
        <img src={pen} alt='pen'width='18'/>
        <p >Observability is key to the futer of<br/>software(and your DevOps career)</p>
    </div>
    <div className='right-sidebar-div-2' >
        <img src={pen} alt='pen'width='18'/>
        <p>Podcast 374:How valuable is your screen<br/> name?</p>
    </div>
    </div>
    <h5>Featured on Meta</h5>
    <div className='right-sidebar-div-1'>
<div className='right-sidebar-div-2' >
        <img src={message} alt='message'width='18'/>
        <p>Review queue workflows-Final release...</p>
    </div>
    <div className='right-sidebar-div-2' >
        <img src={message} alt='message'width='18'/>
        <p>Please welcome Valued Associates:#958<br/>-v2Blast #959-SpencerG</p>
    </div>
    <div className='right-sidebar-div-2' >
        <img src={blacklogo} alt='logo'width='18'/>
        <p>Outdated Answers:accepted answer is <br/>now Unpinned on Stack Overflow</p>
    </div>
    <h5>Hot Meta posts</h5>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
       <p>38</p>
        <p>Why was this spam flag declined,yet<br/>the Questin marked as spam</p>
    </div>
    <div className='right-sidebar-div-2' >
       <p>20</p>
        <p>What is the best course of action when<br/>a user has high enough rep to...</p>
    </div>
    <div className='right-sidebar-div-2' >
      <p>14</p>
        <p>Is a link to the "How tp ask"help page a<br/>useful comment?</p>
    </div>
    </div>
</div>
</div>
  )
}

export default Widget
