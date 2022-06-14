import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselPromo() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654699507609-home-sliderdesktop.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654699507609-home-sliderdesktop.jpg"
          alt="Second slide"
        />

    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1654699507609-home-sliderdesktop.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPromo;