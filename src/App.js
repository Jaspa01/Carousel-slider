import './App.css';
// import Carousel from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';
import { ITEMS, responsive } from './data';

function App() {

  return (

    <div className="App">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {ITEMS.map((item) => {
          return <Products data={item} />
        })}
      </Carousel>
    </div>
  );
}

export default App;

