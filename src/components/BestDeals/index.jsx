import React, { Component } from 'react';

import { Wrapper } from './Wrapper.styled';
import { Styled } from './BestDeals.styled';

class BestDeals extends Component {
  // state: {}

  render() {
    const { GalleryButtons, GalleryTabs } = Styled;
    return (
      <Wrapper>
        <GalleryButtons>Buttons</GalleryButtons>
        <GalleryTabs>Tabs</GalleryTabs>
      </Wrapper>
    );
  }
}

export default BestDeals;
