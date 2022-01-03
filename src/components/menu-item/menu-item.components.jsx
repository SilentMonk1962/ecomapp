import React from 'react';
import './menu-item.styles.scss';
import {useNavigate} from 'react-router-dom';

const MenuItem = ({title, imageUrl,size, linkUrl}) =>{
  let navigate=useNavigate();
  return(
     <div className={`${size} menu-item`}
     onClick={()=>navigate(`${linkUrl}`)}
     >
    <div className='background-image' style ={{
       backgroundImage:`url(${imageUrl})` 
     }} ></div>
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>Buy</span>
    </div>
  </div>
  )}
export default MenuItem