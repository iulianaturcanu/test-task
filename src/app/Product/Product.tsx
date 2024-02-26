import Image from "next/image";
import { ProductType } from "../page";
import styles from './Product.module.css';

type ProductTypeProps = {
    product: ProductType;
    size: string;
}

const Product = (props: ProductTypeProps) => {

    const { product } = props;
    return (
      <div>
          {product.images[0] ? <Image className={styles.image} src={'/download.png'} alt="t-shirt image" width="280" height="200" /> : null}
          <h5 className={styles.title}>{product?.title}</h5>
          <h4>$ {product?.price}</h4>
      </div>
    );
}

export default Product;