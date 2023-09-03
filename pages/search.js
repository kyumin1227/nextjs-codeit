import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <h1>Search</h1>
      <SearchForm defaultValue={q} />
      <div>Search {q}</div>
    </>
  );
}
