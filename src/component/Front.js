import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './front.css'

function Front() {
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-3">
                <div className='card'>
                    <Link to='html'>HTML</Link>
                 </div>
            </div>
            <div className="col-md-3">
            <div className='card'>
              <Link to='css'>CSS</Link>
              </div>
            </div>
             <div className="col-md-3">
                 <div className='card'>
                     <Link to='javascript'>JAVASCRIPT</Link>
                 </div>
            </div>
            <div className="col-md-3">
                 <div className='card'>
                      <Link to='react'>REACT JS</Link>
                 </div>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Front