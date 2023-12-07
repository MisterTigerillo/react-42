import React, { Component } from 'react';

import { Wrapper } from './Wrapper.styled';
import { Styled } from './BestDeals.styled';

class BestDeals extends Component {
  state: {visible: false,}

  render() {
    const { GalleryButtons, GalleryTabs, Button } = Styled;
    return (
      <Wrapper>
        <GalleryButtons>
          <Button>Show</Button>
        </GalleryButtons>
        <GalleryTabs></GalleryTabs>
      </Wrapper>
    );
  }
}

export default BestDeals;
