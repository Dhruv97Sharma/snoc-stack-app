import { 
    KeyboardArrowUp, 
    PeopleAltOutlined, 
    ShoppingCartOutlined,
    AccountBalanceWalletOutlined,
    MonetizationOnOutlined
} from '@mui/icons-material'
import React from 'react'
import './widgets.scss'
const Widgets = ({type}) => {
    let data;
    // temp amount
    const amount = 73521;
    const perc = 20;
    switch (type) {
        case 'user':
            data={
                title: "USERS",
                money: false,
                link: "View All Users",
                icon: (<PeopleAltOutlined className='icon' style={{color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)'}}/>)
            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                money: false,
                link: "View All Orders",
                icon: (<ShoppingCartOutlined className='icon' style={{color: 'goldenrod', backgroundColor: 'rgba(218,165,32,0.2)'}}/>)
            }
            break;
        case 'profit':
            data = {
                title: "PROFITS",
                money: true,
                link: "View Net Earnings",
                icon: (<MonetizationOnOutlined className='icon' style={{color: 'green', backgroundColor: 'rgba(0,128,0,0.2)'}}/>)
            }
            break;
        case 'balance':
            data = {
                title: "BALANCE",
                money: true,
                link: "View All Balance",
                icon: (<AccountBalanceWalletOutlined className='icon' style={{color: 'purple', backgroundColor: 'rgba(218,0,128,0.2)'}}/>)
            }
            break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.money && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUp />
                {`${perc}%`}
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets