import { 
  DashboardRounded, 
  PeopleAltRounded, 
  Inventory2Rounded,  
  CreditCardRounded, 
  LocalShippingRounded,
  QueryStatsRounded,
  NotificationsRounded,
  HealthAndSafetyRounded,
  TerminalRounded,
  HandymanRounded,
  FaceRounded,
  ExitToAppRounded
} from '@mui/icons-material'
import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{textDecoration: "none"}}>
          <span className="logo">SNoc</span>  
        </Link>
      </div>
      <div className="center">
          <ul>
            <p className="title">DASHBOARD</p>
            <Link to='/' style={{textDecoration: "none"}}>
              <li className=''><DashboardRounded className='icon'/><span>Dash Board</span></li>
            </Link>
            {/* <p className="title">STATS</p>
            <Link to='/users' style={{textDecoration: "none"}}>
              <li className=''><PeopleAltRounded className='icon'/><span>Users</span></li>
            </Link>
            <Link to='/products' style={{textDecoration: "none"}}>
              <li className=''><Inventory2Rounded className='icon'/><span>Products</span></li>
            </Link>
            <li className=''><CreditCardRounded className='icon'/><span>Orders</span></li>
            <li className=''><LocalShippingRounded className='icon'/><span>Delivery</span></li> */}
            <p className="title">USEFUL LINKS</p>
            <li className=''><QueryStatsRounded className='icon'/><span>Stats</span></li>
            <li className=''><NotificationsRounded className='icon'/><span>Notifications</span></li>
            <p className="title">SERVICE</p>
            <li className=''><HealthAndSafetyRounded className='icon'/><span>System Health</span></li>
            <li className=''><TerminalRounded className='icon'/><span>Logs</span></li>
            <p className="title">USER SETTINGS</p>
            <li className=''><HandymanRounded className='icon'/><span>Settings</span></li>
            <li className=''><FaceRounded className='icon'/><span>Profile</span></li>
            <li className=''><ExitToAppRounded className='icon'/><span>Logout</span></li>
          </ul>
          <p className='credit'> Made with passion © 2022 by Vivek Chauhan </p>
      </div>
    </div>
  )
}

export default Sidebar