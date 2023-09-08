import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

// 정적 생성 시 함수를 자동으로 실행시켜 결과를 반영하여 파일을 생성 (이름 고정)
// 정적 생성은 빌드 할 때 실행
export async function getStaticProps() {
  const res = await axios.get("products");
  const products = res.data.results;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const res = await axios.get("products");
  //   const nextProducts = res.data.results;
  //   setProducts(nextProducts);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </div>
  );
}
