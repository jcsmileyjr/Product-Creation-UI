import React from 'react';
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
  return (
    <main>
      {/*Non input section to display the product based on input from Product UI section */}
      <section id="product-visual" className=''>
          Product Visual
      </section>
      
      {/*Product input section that is displayed in the Product Visual Section */}
      <section id="product-ui">
          Product UI
      </section>
    </main>
  );
}

export default App;
