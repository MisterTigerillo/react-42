// import elements from '../../../data.json';

const galleryPics = [
  {
    id: 'id-1',
    houseOne: `${'../../../assets/Image.jpg'}`,
    url: {
      houseOne: `${'../../../assets/Image.jpg'}`,
      houseTwo: '../../../assets/Image2.jpg',
      houseThree: '../../../assets/Image3.jpg',
    },
  },
  //   {
  //     id: 'id-2',
  //     url: ['../../../assets/Image.jpg', '../../../assets/Image2.jpg'],
  //   },
  //   {
  //     id: 'id-3',
  //     url: ['../../../assets/Image.jpg'],
  //   },
  //   {
  //     id: 'id-4',
  //     url: ['../../../assets/Image.jpg', '../../../assets/Image3.jpg'],
  //   },
];

const Gallery = () => {
  return galleryPics.map(pic => (
    <div key={pic.id}>
      <img src={pic.houseOne} alt="Pic" />
    </div>
  ));
};

export default Gallery;
