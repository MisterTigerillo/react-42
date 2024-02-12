import React, { Component } from 'react';

import { Wrapper } from './Wrapper.styled';
import { Styled } from './BestDeals.styled';

const GalleryOptions = [
  { label: 'Pic1', tagOne: 'Featured', tagTwo: '3D' },
  { label: 'Pic2', tagOne: 'Featured' },
  { label: 'Pic3', tagTwo: '3D' },
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
          {this.state.visible && (
            <Tab>
              <div>
                <a href="">
                  <img src="../../assets/Image.jpg" alt="House" />
                </a>
              </div>
            </Tab>
          )}
        </GalleryButtons>
        <Tabs>
          <button onClick={this}>Residential Property</button>
          <button>Commercial Property</button>
          <button>Agriculture Property</button>
          <button>Industrial Property</button>
        </Tabs>
        {/* <GalleryTabs></GalleryTabs> */}
      </Wrapper>
    );
  }
}

export default BestDeals;
