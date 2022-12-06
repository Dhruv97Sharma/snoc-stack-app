import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import './single.scss'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="item-img" />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-items">
                  <div className="item-key">Email:</div>  
                  <div className="item-value">janedoe@email.com</div>  
                </div>
                <div className="detail-items">
                  <div className="item-key">Phone:</div>  
                  <div className="item-value">+1 2345 1214</div>  
                </div>
                <div className="detail-items">
                  <div className="item-key">Address:</div>  
                  <div className="item-value">Elton St. 234 Garden drive New York</div>  
                </div>
                <div className="detail-items">
                  <div className="item-key">Country:</div>  
                  <div className="item-value">United States</div>  
                </div>
              </div>
            </div>
          </div>  
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending  (Last 6 Month)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single