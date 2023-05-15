import styles from './shop.module.css';
import { Banner } from '@store/shared/ui';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
export interface ShopProps {}

export function Shop(props: ShopProps) {
  return (
    <div className={styles['container']}>
      <Banner text="Welcome to shop!" />
      <Link to="/cart">Go to Cart!</Link>
    </div>
  );
}

export default Shop;
