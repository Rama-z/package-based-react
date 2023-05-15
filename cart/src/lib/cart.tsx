import Banner from 'shared/ui/src/lib/Banner';
import styles from './cart.module.css';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <div className={styles['container']}>
      <Banner text="Welcome to cart" />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default Cart;
