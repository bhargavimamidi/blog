import React from 'react';
import './topbar.css';
export default function TopBar(){
    return (
        <div className='top'>
            <div className="topLeft"> 
      <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
      </div>
      <div className="topCenter">
      <ul className="topList">
          <li className="topListItem">
              HOME
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
              WRITE
          </li>
          <li className="topListItem">LOGOUT</li>o
        </ul>
       </div>
      <div className="topRight"> R </div>
        </div>
    )
}