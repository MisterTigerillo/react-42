import React, { Component } from 'react';

import GalleryTabs from './GalleryTabs';
import Gallery from './Gallery';

class BestDeals extends Component {
  // state: {}

  render() {
    return (
      <>
        <GalleryTabs />
        <Gallery />
      </>
    );
  }
}

export default BestDeals;
