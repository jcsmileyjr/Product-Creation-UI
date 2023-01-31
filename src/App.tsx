import {useState} from 'react';
import DefaultImage from './assets/african-pillow-design.jpg'
import './App.css';

function App() {
  const [productTitle, setProductTitle] = useState("Product Title");
  const [productDescription, setProductDescription] = useState("Product Description");
  const [productPrice, setProductPrice] = useState("5");
  const [productInstock, setProductInstock] = useState("No");
  const [productNumberOfUnits, setProductNumberOfUnits] = useState(4);
  const [productColorDescription, setProductColorDescription] = useState("Product Color")
  const [productMadeInUSA, setProductMadeInUSA] = useState("No");

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
          <p>{productMadeInUSA==="Yes"?"Made in USA":"Imported Products"}</p>
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
                <input checked={productInstock==="Yes"?true:false} onChange={() => setProductInstock("Yes")} id="product-instock-yes" value="Yes" name="product-instock-input" type="radio"></input>
                <label htmlFor='product-instock-yes'>Yes</label>                
              </div>
              <div>
                <input checked={productInstock==="No"?true:false} onChange={() => setProductInstock("No")} id="product-instock-no" value="No" name="product-instock-input" type="radio"></input>
                <label htmlFor='product-instock-no'>No</label> 
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
            <div className='productMadeInUSA__input--container'>
              <p>Made in USA:</p>
              <div>
                <input checked={productMadeInUSA==="Yes"?true:false} onChange={() => setProductMadeInUSA("Yes")} id="product-made-in-USA-yes" value="Yes" name="product-made-in-USA-input" type="radio"></input>
                <label htmlFor='product-made-in-USA-yes'>Yes</label>                
              </div>
              <div>
                <input checked={productMadeInUSA==="No"?true:false} onChange={() => setProductMadeInUSA("No")} id="product-made-in-USA-no" value="No" name="product-made-in-USA-input" type="radio"></input>
                <label htmlFor='product-made-in-US-NO'>No</label> 
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

/**
 * Notes
 * Sample Product Title: Afro-Futurism Satin Pillows
 * Sample Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * Sample Product color: Beige background with rainbow flowers accent with a light blue and bright red hair bows
 */
export default App;
