import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import { connect } from 'react-redux';


const Directory = ({directory}) =>  {
  
  return (
    <div className="directory-menu"> 
      {
        directory.sections.map(({id, ...others}) =>  ( 
            <MenuItem key={id} {...others}/>
          ))
      } 
    </div>
  );
};

const mapStateToProps = state => ({
  directory: state.directory
})

export default connect(mapStateToProps) (Directory);