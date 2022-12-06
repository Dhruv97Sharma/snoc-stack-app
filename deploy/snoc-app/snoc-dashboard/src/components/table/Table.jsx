import React from 'react'
import TableMain from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'
import axios from "axios";

const Table = () => {

    const [data, setData] = React.useState([])
    const [autoRefresh, setAutoRefresh] = React.useState(true)
    const apiUrl = 'http://localhost:8888/get-predictions/'

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];

  const uniqueId = () => Math.random().toString(36).substring(2, 9);

  const fetchData = () => {
    axios.get(apiUrl,{
        headers:{
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        }
      })
      .then((res) => {
        setData(JSON.parse(res.data.data))
        console.log("dataset:",JSON.parse(res.data.data))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  // const fetchPrediction = (postData) => {
  //   axios.post('http://localhost:8000/predict/',postData,{
  //     headers:{
  //       'Access-Control-Allow-Origin': 'http://localhost:5602',
  //     }
  //   })
  //   .then((res) => {
  //     setPrediction(JSON.parse(res.data.network_instrusion_prediction))
  //     console.log(JSON.parse("prediction",res.data.network_instrusion_prediction))
  //   })
  //   .catch((error) => {
  //     console.error(error.message)
  //   })
  // }

  React.useEffect(() => {

    if(autoRefresh){
      const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
        fetchData()
      }, 3000)
    
      return () => clearInterval(intervalId); //This is important
    }

    // if(prediction){
    //   console.log("posting stringified data: ",jsonData)
    //   fetchPrediction(jsonData)
    // }

  },[autoRefresh, data])
    
  return (
    <TableContainer component={Paper} className="table">
      <div className="cell-action">
        <div className={autoRefresh ? "on-button" : "view-button"} onClick={() => setAutoRefresh(!autoRefresh)}>Table Auto Refresh: {autoRefresh ? "ON" : "OFF"}</div>
      </div>
      <TableMain sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Network Packet ID</TableCell>
            <TableCell className="table-cell">Protocol Type</TableCell>
            <TableCell className="table-cell">Count</TableCell>
            <TableCell className="table-cell">Service HTTP</TableCell>
            <TableCell className="table-cell">Service whois</TableCell>
            <TableCell className="table-cell">Logged In</TableCell>
            <TableCell className="table-cell">Intrusion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell className="table-cell">{ row.id }</TableCell>
                <TableCell className="table-cell">
                    <div className="product-wrapper">
                        <img src={row.img} alt="" className="product-img" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="table-cell">{row.customer}</TableCell>
                <TableCell className="table-cell">{row.date}</TableCell>
                <TableCell className="table-cell">{row.amount}</TableCell>
                <TableCell className="table-cell">{row.method}</TableCell>
                <TableCell className="table-cell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))} */}
          
          { data.map((row, index) => (
            <TableRow key={uniqueId()}>
                <TableCell className="table-cell">{ uniqueId() }</TableCell>
                <TableCell className="table-cell">
                    {/* <div className="product-wrapper">
                        <img src={row.img} alt="" className="product-img" />
                        {row.product}
                    </div> */}
                   { row.protocol_type_icmp===0 ? (row.protocol_type_tcp === 0 ? "UDP" : "TCP") : "ICMP" }
                </TableCell>
                <TableCell className="table-cell">{row.count}</TableCell>
                <TableCell className="table-cell">{row.service_http}</TableCell>
                <TableCell className="table-cell">{row.service_whois}</TableCell>
                <TableCell className="table-cell">{row.logged_in}</TableCell>
                <TableCell className="table-cell">
                    <span className={`status ${row.intrusion===0 ? "Approved" : "Intrusion"}`}>{row.intrusion===0 ? "Safe Network Packet" : "Intrusion Detected"}</span>
                </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </TableMain>
    </TableContainer>
  )
}

export default Table