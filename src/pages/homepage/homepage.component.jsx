import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import CarouselSlider from "../../components/carousel/carousel.component";
import Header from '../../components/header/header.component';

const HomePage = () => (
  <div>
    <Header isBannerlessPage={false} />
    <CarouselSlider carouselHeight="700px" />
    <div className="homepage">
      <Directory />
    </div>
  </div>
);

export default HomePage;