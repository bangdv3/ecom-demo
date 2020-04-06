
const INIT_STATE = {
  sections: [
    {
      title: 'Hat',
      imgUrl: 'https://picsum.photos/id/237/200/300',
      id: '1',
      linkUrl: 'hats'
    },
    {
      title: 'Jacket',
      imgUrl: 'https://picsum.photos/id/238/200/300',
      id: '2',
      linkUrl: ''
    },
    {
      title: 'Sneaker',
      imgUrl: 'https://picsum.photos/id/239/200/300',
      id: '3',
      linkUrl: ''
    },
    {
      title: 'Men',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: '4',
      linkUrl: '',
      size: 'large',
    },
    {
      title: 'Women',
      imgUrl: '',
      id: '5',
      linkUrl: '',
      size: 'large',
    }
  ]
}

const directoryReducer = (state = INIT_STATE, action) => {
  switch(action) {

    default:  return state
  }
}

export default directoryReducer;