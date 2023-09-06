/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // redirect (주소가 변경되었을 경우 이전 주소를 자동으로 새 주소로 이동시킴)
  async redirects() {
    return [
      {
        source: "/products/:id", // redirect 처리 할 주소
        destination: "/items/:id", // 목적지
        permanent: false, // 브라우저의 주소 저장 여부
      },
    ];
  },
  // 외부 이미지 사용을 위한 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com", // host 주소
        port: "",
        pathname: "/codeitmall/**", // 상세 주소 (** 은 하위 모든 파일 및 폴더 포함)
      },
    ],
  },
};

module.exports = nextConfig;
