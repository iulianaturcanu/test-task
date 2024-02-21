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
          {product.images[0] ? <img className={styles.image} src={product.images[0]} alt="t-shirt image" width="280px"/> : null}
          <h5 className={styles.title}>{product?.title}</h5>
          <h4>$ {product?.price}</h4>
      </div>
    );
}

export default Product;