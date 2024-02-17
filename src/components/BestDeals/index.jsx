import React, { Component } from 'react';

import { Wrapper } from './Wrapper.styled';
import { Styled } from './BestDeals.styled';

const tabsCarousel = [
  [
    { id: 'H1', label: 'Pic1', tags: ['Featured', '3D'] },
    { id: 'H2', label: 'Pic2', tags: ['Featured', '3D'] },
    { id: 'H3', label: 'Pic3', tags: '3D' },
  ],

  [
    { id: 'H4', label: 'Pic4', tags: ['Featured', '3D'] },
    { id: 'H5', label: 'Pic5', tags: '3D' },
    { id: 'H6', label: 'Pic6', tags: ['Featured', '3D'] },
    { id: 'H7', label: 'Pic7', tags: '3D' },
    { id: 'H8', label: 'Pic8', tags: ['Featured', '3D'] },
    { id: 'H9', label: 'Pic9', tags: '3D' },
  ],

  [
    { id: 'H10', label: 'Pic10', tags: ['Featured', '3D'] },
    { id: 'H11', label: 'Pic11', tags: '3D' },
  ],
  [
    { id: 'H12', label: 'Pic12', tags: ['Featured', '3D'] },
    { id: 'H13', label: 'Pic13', tagOne: ['Featured', '3D'] },
  ],
];

class BestDeals extends Component {
  state = { visible: false };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { GalleryButtons, Button, Tab, Tabs } = Styled;
    return (
      <Wrapper>
        <GalleryButtons>
          <Button onClick={this.toggle}>
            {this.state.visible ? 'Hide' : 'Show'}
          </Button>
        </GalleryButtons>
        <Tabs>
          <button>Residential Property</button>
          <button>Commercial Property</button>
          <button>Agriculture Property</button>
          <button>Industrial Property</button>
        </Tabs>
        {/* <GalleryTabs></GalleryTabs> */}
        {tabsCarousel.map(tab =>
          tab.map(({ id, label, tags }) => <div key={id}>{label}</div>),
        )}
      </Wrapper>
    );
  }
}

export default BestDeals;
