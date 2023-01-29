import {useState} from 'react';
import DefaultImage from './assets/african-pillow-design.jpg'
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
  const [productDescription, setProductDescription] = useState("Product Description");
  const [productPrice, setProductPrice] = useState("5");
  const [productInstock, setProductInstock] = useState("Yes");
  const [productNumberOfUnits, setProductNumberOfUnits] = useState(4);
  const [productColorDescription, setProductColorDescription] = useState("Beige background with rainbow flowers accent with a light blue and bright red hair bows")

  return (
    <main>
      {/*Non input section to display the product based on input from Product UI section */}
      <section id="product-visual" className=''>
        <h1 className='productVisual__title--style'>{productTitle}</h1>
        <img className='productVisual__productImage--style' src={DefaultImage} alt="african woman with glasses surround by butterflis on a pillow" />
        <p className='productVisual__description--style'>{productDescription}</p>
        <div className='productVisual__price-and-Stock--container'>
          <p className='productVisual__price--style'><span className='productVisualDollarSign'>$</span>{productPrice}</p>
          <p>{productInstock==="Yes"?"In Stock":"Not in Stock"}</p>
        </div>

        {/*Product Details Visual area */}
        <div id="product-visual-details-area">
          <p>Number of Units: <span>#{productNumberOfUnits}</span></p>
          <p>Color: <span>{productColorDescription}</span></p>
        </div>
      </section>
      
      {/*Product input section that is displayed in the Product Visual Section */}
      <section id="product-ui">
        <section id="product-information">
          <p className='productUI__heading--style'>General Product Information </p>
          <div className='productInformation__content--layout'>
            <div className='productInformation__input--container'>
              <label htmlFor="product-title-input">Title:</label>
              <input className='contentInputs--style' id="product-title-input" type="text" onChange={(e)=> setProductTitle(e.target.value)}></input>
            </div>
            <div className='productInformation__input--container'>
              <label className='productDescriptionInput__label--style' htmlFor='product-description-input'>Description:</label>
              <textarea className='contentInputs--style' rows={5} onChange={(e) => setProductDescription(e.target.value)} id="product-description-input"></textarea>
            </div>
            <div className='productInformation__input--container'>
              <label className='productPriceInput__label--style' htmlFor='product-price-input'>Price:</label>
              <input className='contentInputs--style' id="product-price-input" type="number" onChange={(e)=> setProductPrice(e.target.value)}></input>
            </div>
            <div className='productInstock__input--container'>
              <p>Instock:</p>
              <div>
                <input onChange={() => setProductInstock("Yes")} id="product-instock-yes" value="Yes" name="product-instock-input" type="radio"></input>
                <label htmlFor='product-instock-yes'>Yes</label>                
              </div>
              <div>
                <input onChange={() => setProductInstock("No")} id="product-instock-no" value="No" name="product-instock-input" type="radio"></input>
                <label htmlFor='product-instock-yes'>No</label> 
              </div>
            </div>
          </div>
        </section>

        <section id="product-details">
          <p className='productUI__heading--style'>Product Details </p>
          <div className='productDetails__content--layout'>
            <div className='productDetails__input--container'>
                <label htmlFor="product-number-of-units-input"># of Units:</label>
                <input className='contentInputs--style' id="product-number-of-units-input" type="number" min="1" max="20" step="1" onChange={(e)=> setProductNumberOfUnits(Math.ceil(Number(e.target.value)))}></input>
            </div>
            <div className='productDetails__input--container'>
                <label htmlFor="product-color-description-input">Color</label>
                <input className='contentInputs--style' id="product-color-description-input" type="text" onChange={(e)=> setProductColorDescription(e.target.value)}></input>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
