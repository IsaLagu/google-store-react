import { products } from 'data.jsx';

export default function List() {
  const listItems = products.map(product =>
    <div>
        <li key={product.id}>
        <img src={product.image[0]} alt={product.title} />
        <p>{product.name}</p>
        <p>{product.price}</p>  
        <div style='background-color:{product.color[0]};'></div>  
        </li>
    </div>
  );
  return (
    <main>
    {listItems}
    </main>
  );
}