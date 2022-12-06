import React from 'react'
import './navbar.scss'
import { 
  SearchRounded, 
  LanguageRounded, 
  DarkModeRounded, 
  FullscreenExitRounded, 
  NotificationsRounded, 
  ForumRounded, 
  ListRounded } from '@mui/icons-material'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />  
          <SearchRounded className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageRounded className='icon'/>
            English
          </div>
          <div className="item" onClick={()=>dispatch({type: 'TOGGLE'})}>
            <DarkModeRounded className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitRounded className='icon'/>
          </div>
          <div className="item">
            <NotificationsRounded className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ForumRounded className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListRounded className='icon'/>
          </div>
          <div className="item">
            <img src="https://picsum.photos/id/237/1920/1080" alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar