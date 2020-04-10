import React from 'react';
import './homepage.scss'
import Directory from '../../components/directory/directory'; 
import { HomeTag } from './home-tags';



//just test git

const HomePage = (props) => {
  return(
    
    <HomeTag>
      <Directory/>  
    </HomeTag>  
  )
}

export default HomePage