import { MoreVertRounded, KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import React from 'react'
import './feature.scss'
const Feature = () => {
  return (
    <div className='feature'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRounded className='icon'/>
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={7}/> 
        </div>
        <div className="title">Total Sales Today</div>
        <div className="amount">$420</div>
        <div className="desc">Previous transactions processing.</div>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target Sale</div>
            <div className="item-result positive">
              <KeyboardArrowUpRounded fontSize='small'/>
              <div className="result-amount">$12.4k</div>  
            </div>
          </div>  
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUpRounded fontSize='small'/>
              <div className="result-amount">$12.4k</div>  
            </div>
          </div>  
          <div className="item">
            <div className="item-title">last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUpRounded fontSize='small'/>
              <div className="result-amount">$12.4k</div>  
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Feature