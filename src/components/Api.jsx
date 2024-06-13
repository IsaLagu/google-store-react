import { products } from '../assets/data/data.jsx';

export default function List() {
  const listItems = products.map(product =>
    <div>
        <li key={product.id}>
        <img src={product.property[0]} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.price}</p>  
        <p>{product.category}</p>  
        <p>{product.color}</p>  
        </li>
    </div>
  );
  
  return (
    <main>
    {listItems}
    </main>
  );
}