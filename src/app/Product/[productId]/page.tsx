'use client';
import { useEffect, useState } from 'react';

const ProductDetails = ({ params: { productId } }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);
  console.log(productId);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
