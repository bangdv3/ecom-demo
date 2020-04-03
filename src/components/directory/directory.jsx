import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: 'Hat',
          imgUrl: 'https://picsum.photos/id/237/200/300',
          id: '1'
        },
        {
          title: 'Jacket',
          imgUrl: 'https://picsum.photos/id/238/200/300',
          id: '2'
        },
        {
          title: 'Sneaker',
          imgUrl: 'https://picsum.photos/id/239/200/300',
          id: '3'
        },
        {
          title: 'Men',
          imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: '4',
          size: 'large',
        },
        {
          title: 'Women',
          imgUrl: '',
          id: '5',
          size: 'large',
        }
      ]
    }
  }
  
  
  render(){

    return (
      <div className="directory-menu"> 
        {
          this.state.sections.map(({title, imgUrl, id, size}) =>  ( 
              <MenuItem key={id} title = {title}  imgUrl={imgUrl} size = {size}/>
            ))
        } 
      </div>
    );
  }
  
};

export default Directory;