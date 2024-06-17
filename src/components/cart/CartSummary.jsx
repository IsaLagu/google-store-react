import React from 'react';
import './cartSummary.scss';
import Button from '../Button.jsx';

const CartSummary = ({ cartItems }) => {
   
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 4.90;
    const total = subtotal + shipping;

    return (
      <div className="summaryColRight">
          <h3 className="ff summaryTitle">Order Summary</h3>
          <div className="lineTotals">
              <div className="subtotals">
                  <div className="totalsSpacing">
                  <p className="ff summaryText textBold">Subtotal</p>
                  <div className="ff summaryText">{subtotal.toFixed(2)} €</div>
                  </div>
                  <div className="totalsSpacing">
                  <p className="ff summaryText textBold">Shipping costs</p>
                  <p className="ff summaryText">{shipping.toFixed(2)} €</p>
                  </div>
                  <div className="totalsSpacing lastItem">
                  <p className="ff summaryText textBold">estimated VAT</p>
                  <p className="ff summaryText">including</p>
                  </div>
              </div>
              <div className="totalsSpacing finalTotal">                
                  <p className="ff textBold">Total estimated</p>
                  <div className="ff">{total.toFixed(2)} €</div>
              </div>
              <div className = "installment">
                  <div className ="ff calcInstallment">or {total.toFixed(2)/3}€/month</div>
                  <p className="ff calcInstallment">with 3 monthly installments *</p>
              </div>
            <div>
                <Button width="100%">Complete the purchase</Button>
            </div> 

          </div>
      </div>
    );
  }

  export default CartSummary;