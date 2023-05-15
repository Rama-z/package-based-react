// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Cart } from '@store/cart';
import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
import Shop from './shop/shop';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
