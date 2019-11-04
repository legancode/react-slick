import React from 'react';
import Slider from "react-slick";

const App = props => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   touchThreshold: 7,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     }
  //   ]
  // };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    touchThreshold: 7, //sensibilidad del swipe
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '40px', //paddinga  los lados del slider
    focusOnSelect: true,
    dotsClass: 'dots-class'
  };

  return (
    <div className="App">
      <header className="App-header">
        ES UN HEADER
      </header>
      <main>
        {/* <div className="carousel">
          <Slider {...settings} >
            <div className="image">
              <img src="https://images.unsplash.com/photo-1572550182267-9e3451010b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="foto" />
            </div>
            <div className="image">
              <img src="https://images.unsplash.com/photo-1572666352738-66cf42581fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="foto" />
            </div>
            <div className="image">
              <img src="https://images.unsplash.com/photo-1572656934803-d2162b2e98bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="foto" />
            </div>
            <div className="image">
              <img src="https://images.unsplash.com/photo-1572666352738-66cf42581fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="foto" />
            </div>
          </Slider>
        </div> */}

        <div className="carousel-2">
          <Slider {...settings2} >
            <div className="block">
              <p>1</p>
            </div>
            <div className="block">
              <p>2</p>
            </div>
            <div className="block">
              <p>3</p>
            </div>
            <div className="block">
              <p>4</p>
            </div>
            <div className="block">
              <p>5</p>
            </div>
            <div className="block">
              <p>6</p>
            </div>
            <div className="block">
              <p>7</p>
            </div>
            <div className="block">
              <p>8</p>
            </div>
            <div className="block">
              <p>9</p>
            </div>
            <div className="block">
              <p>10</p>
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default App;
