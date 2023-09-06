import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  const getProducts = async (query) => {
    const res = await axios.get(`products/?q=${query}`);
    const nextProducts = res.data.results ?? [];
    setProducts(nextProducts);
  };

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과</title>
      </Head>
      <h1>Search</h1>
      <SearchForm defaultValue={q} />
      <div>Search {q}</div>
      <ProductList products={products} />
    </>
  );
}
