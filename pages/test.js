import Image from "next/image";

export default function Test() {
  return (
    <>
      <img
        src="/images/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />

      {/* 이미지 크기 최적화 및 이미지 주소 변경
      기본 주소 = http://localhost:3000/images/product.jpeg
      변경 주소 = http://localhost:3000/_next/image?url=%2Fimages%2Fproduct.jpeg&w=640&q=75
        페이지 로드 시에 바로 불러오는 것이 아닌 필요할 때 불러옴 */}
      <Image
        src="/images/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
    </>
  );
}
