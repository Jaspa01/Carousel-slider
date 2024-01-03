import './App.css';
// import Carousel from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';
import { ITEMS, responsive } from './data';

function App() {

  return (

    <div className="App">
      <Carousel responsive={responsive}>
        {ITEMS.map((item) => {
          return <Products data={item} />
        })}
      </Carousel>
    </div>
  );
}

export default App;
