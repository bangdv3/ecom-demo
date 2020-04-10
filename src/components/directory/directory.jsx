import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import { connect } from 'react-redux';
import { selectDirectorSections } from '../../redux/directory/directory-selector';




const Directory = ({sections}) =>  {
  
  return (
    <div className="directory-menu"> 
      {
        sections.map(({id, ...others}) =>  ( 
          <MenuItem key={id} {...others}/>
        ))
      } 
    </div>
  );
};

const mapStateToProps = state => ({
  sections: selectDirectorSections(state)
})


export default connect(mapStateToProps) (Directory);