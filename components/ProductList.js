import Link from "next/link";
import styles from "@/styles/ProductList.module.css";
import Image from "next/image";

export default function ProductList({ products = [] }) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/products/${product.id}`}>
            <div>
              <Image
                src={product.imgUrl}
                width="300"
                height="300"
                alt={product.name}
              />
            </div>
            <span className={styles.productName}>{product.name}</span>
            <br />
            {product.price}원
          </Link>
        </li>
      ))}
    </ul>
  );
}
