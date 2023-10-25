import  React from 'react';
import Pagination from '@mui/material/Pagination';
import './dashboard.css';

export default function PaginationControlled({page,handleChange}) {
  

  return (
    <div className='pagination'>
      <Pagination count={10} page={page} onChange={handleChange} color="primary"  className="custom-pagination"/>
          </div>
  );
}