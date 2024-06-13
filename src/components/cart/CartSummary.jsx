import './cartSummary.scss';

export default function CartSummary() {
   
    //const [total, setTotal] = useState(0);
    let subtotal = 199;
    let total = 500;

    return (
      <div className="summaryColRight">
          <h3 className="summaryTitle">Order Summary</h3>
          <div className="lineTotals">
              <div className="subtotals">
              {/* flex justify-between pt-8 */}
                  <p className="summaryText">Subtotal</p>
                  <div className="summaryPrice">{subtotal.toFixed(2)} €</div>
               
                  <p className="summaryText">Shipping costs</p>
                  <p className="summaryPrice">4.90 €</p>
  
                  <p className="summaryText">estimated VAT</p>
                  <p className="summaryPrice">including</p>
              </div>
              <div className="finalTotal">                
                  <p className="totalText">Total estimated</p>
                  <div className="totalPrice">{total.toFixed(2)} €</div>
              </div>
              <div className = "installment">
                  <div className ="calcInstallment">or {total.toFixed(2)}€/month</div>
                  <p>with 3 monthly installments *</p>
              </div>
  
              <button className="purchaseButton">
                Complete the purchase
              </button>
          </div>
      </div>
    );
  }