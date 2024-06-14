import Api from './components/Api';

/*const App = () => {
  return (
    <div className="App"><Api /></div>
  )
}*/

import './styles/app.scss';
import './styles/delivery.scss';
import Delivery from './components/delivery.jsx';
//import ProductContainer from './components/productContainer.jsx';

function App() {
    return (
        <div className="App">
            <Api />
        </div>
    )
}

export default App