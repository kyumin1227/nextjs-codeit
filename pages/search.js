import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

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
      <h1>Search</h1>
      <SearchForm defaultValue={q} />
      <div>Search {q}</div>
      <ProductList products={products} />
    </>
  );
}
