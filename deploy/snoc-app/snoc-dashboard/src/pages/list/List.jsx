import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './list.scss'
import DataTable from '../../components/datatable/DataTable'
const List = () => {
  return (
    <div className='list'>
        <Sidebar />
        <div className="list-container">
          <Navbar />
          <DataTable />
        </div>
    </div>
  )
}

export default List