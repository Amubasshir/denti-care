import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner 111.png';
import banner3 from '../../../images/banner/banner333.png';

const Banner = () => {
  return (
    <>
      <Carousel className="banner-text">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h4 className="text-primary">Care For Lifetime</h4>
            <h1 className="text-primary">
              <strong>Let Us Brighten Your Smile</strong>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h4>Care For Your Smile</h4>
            <h1>Commited To Excellence</h1>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h4 className="text-primary">Care For Your Smile</h4>
            <h1 className="text-primary">
              <strong>Commited To Excellence</strong>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
