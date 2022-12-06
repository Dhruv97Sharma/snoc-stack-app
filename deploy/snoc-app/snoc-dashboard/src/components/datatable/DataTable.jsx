import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import {Link} from 'react-router-dom'
const DataTable = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }
    const actionColumn = [{field: "action", headerName: "Action", width: 400, renderCell: (params)=> {
        return (
            <div className="cell-action">
              <Link to="/users/test" style={{textDecoration: "none"}}>
                <div className="view-button">View</div>    
              </Link>
                <div className="delete-button" onClick={() => handleDelete(params.row.id)}>Delete</div>    
            </div>
        )
    }}]
  return (
    <div className='data-table'>
      <div className="data-table-title">
        Add New User:
        <Link to="/users/new" style={{textDecoration: "none"}} className="data-table-link">
          <span> Add New </span>
        </Link>
      </div>
      <DataGrid
        className='data-grid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        autoPageSize
        autoHeight
        density='comfortable'
      />
    </div>
  )
}

export default DataTable