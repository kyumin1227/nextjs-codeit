import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("products");
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </div>
  );
}
