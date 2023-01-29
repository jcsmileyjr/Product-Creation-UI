import {useState} from 'react';
import './App.css';

/**
 * First TYPESCRIPT project - Product Creation UI
 * 
 * TODO 1: DONE- A user can see the words "Hello World"
 * TODO 2: A user can write a new product title through an input field
 * TODO 3: A user can write a brief product description
 * TODO 4: A user can enter a dollar amount. Only whole dollar amounts.
 * TODO 5: A user can check Yes/No if the product is in stock. If no in stock, this should be reflected.
 * TODO 6: A user can verify their product details (number of units, color, made in USA based), shoud be an object.
 * 
 */
function App() {
  const [productTitle, setProductTitle] = useState("Product Title");

  return (
    <main>
      {/*Non input section to display the product based on input from Product UI section */}
      <section id="product-visual" className=''>
        <h1 className='productVisual__title--style'>{productTitle}</h1>
      </section>
      
      {/*Product input section that is displayed in the Product Visual Section */}
      <section id="product-ui">
        <section id="product-information">
          <p>General Product Information </p>
          <div className='productInformation__content--layout'>

          </div>
        </section>

        <section id="product-details">
          <p>Product Details </p>
          <div className='productDetails__content--layout'>

          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
