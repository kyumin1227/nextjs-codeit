import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SizeReviewList from "@/components/SizeReviewList";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // 정적 생성 하지 않은 경로 허용 여부
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const productId = context.params["id"];
  const res = await axios.get(`products/${productId}`);
  const product = res.data;

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  // const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  // const getProduct = async (targetId) => {
  //   const res = await axios.get(`products/${targetId}`);
  //   const nextProduct = res.data;
  //   setProduct(nextProduct);
  // };

  const getSizeReviews = async (id) => {
    const res = await axios.get(`size_reviews?product_id=${id}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  };

  useEffect(() => {
    if (!id) return;

    // getProduct(id);
    getSizeReviews(id);
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
