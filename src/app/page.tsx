'use client';

import { Button, Divider, NativeSelect } from '@mui/material';
import Navigation from './Navigation/Navigation';
import { useEffect, useState } from 'react';
import Product from './Product/Product';
import styles from './page.module.css';

export type ProductType = {
  id: number;
  images: string[];
  price: number;
  title: string;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [property, setProperty] = useState('');
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  // componentDidMount - daca avem [] gol ca parametru
  // componentDidUpdate - daca avem [products] ca parametru
  useEffect(() => {
    fetchProducts();
    // dependencies
  }, []);

  const handleChange = (event) => {
    setProperty(event.target.value);
  }

  const handleClick = () => {
    setVisibleProducts(visibleProducts + 8);
  }
  return (
    <>
      <Navigation showIcon={true} />
      <Divider />
      <div className={styles.filter}>
      {products.length > 0 ? <p>Showing 1-10 of {products.length} Products </p> : null}
      Sort by 
          <NativeSelect
            defaultValue={property}
            inputProps={{
              name: 'property',
              id: 'uncontrolled-native',
            }}
          >
            <option value='title'>Title</option>
            <option value='price'>Price</option>
          </NativeSelect>
      </div>
      <div className={styles.productsContainer}>
        {products.slice(0, visibleProducts).map(product => {
          return (<Product key={product.id} product={product} size="small" />)}
        )}
      </div>
      <Button className={styles.showMore} size="large" variant="contained" onClick={handleClick}>Show more</Button>
    </>
  );
};

export default Home;
