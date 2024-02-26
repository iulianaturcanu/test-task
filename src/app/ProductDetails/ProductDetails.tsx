import { useEffect, useState } from "react";
import { ProductType } from "../page";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductType>();
  const router = useRouter();
  console.log(router.query);

    const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/product/67');
      const data = await response.json();
      setProduct(data);
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
  
    return (
        <div>
            ProductDetails
        </div>
    );
}

export default ProductDetails;