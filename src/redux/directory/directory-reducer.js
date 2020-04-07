
const INIT_STATE = {
  sections: [
    {
      title: 'Hat',
      imgUrl: 'https://picsum.photos/id/237/200/300',
      id: '1',
      linkUrl: 'shop/hats'
    },
    {
      title: 'Jacket',
      imgUrl: 'https://picsum.photos/id/1005/600/900',
      id: '2',
      linkUrl: 'shop/jackets'
    },
    {
      title: 'Sneaker',
      imgUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
      id: '3',
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'Women',
      imgUrl: 'https://picsum.photos/id/1011/600/900',
      id: '4',
      linkUrl: 'shop/women',
      size: 'large',
    },
    {
      title: 'Men',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: '5',
      linkUrl: 'shop/men',
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