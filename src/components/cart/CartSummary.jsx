import './cartSummary.scss';

export default function CartSummary() {
   
    //const [total, setTotal] = useState(0);
    let subtotal = 428.90;
    let total = 433.80;

    return (
      <div className="summaryColRight">
          <h3 className="ff summaryTitle">Order Summary</h3>
          <div className="lineTotals">
              <div className="subtotals">
              {/* flex justify-between pt-8 */}
                  <div className="totalsSpacing">
                  <p className="ff summaryText textBold">Subtotal</p>
                  <div className="ff summaryText">{subtotal.toFixed(2)} €</div>
                  </div>
                  <div className="totalsSpacing">
                  <p className="ff summaryText textBold">Shipping costs</p>
                  <p className="ff summaryText">4.90 €</p>
                  </div>
                  <div className="totalsSpacing">
                  <p className="ff summaryText textBold">estimated VAT</p>
                  <p className="ff summaryText">including</p>
                  </div>
              </div>
              <div className="finalTotal">                
                  <p className="ff textBold">Total estimated</p>
                  <div className="ff">{total.toFixed(2)} €</div>
              </div>
              <div className = "installment">
                  <div className ="ff calcInstallment">or {total.toFixed(2)/3}€/month</div>
                  <p className="ff calcInstallment">with 3 monthly installments *</p>
              </div>
  
              <button className="purchaseButton">
                Complete the purchase
              </button>
          </div>
      </div>
    );
  }