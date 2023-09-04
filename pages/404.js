// import ButtonLink from "@/components/ButtonLink";
// import Container from "@/components/Container";
// import Header from "@/components/Header";
import styles from "@/styles/NotFound.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <div className={styles.content}>
          찾을 수 없는 페이지입니다.
          <br />
          요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :)
        </div>
        <Link href={"/"}>
          <button className={styles.button}>홈으로 이동</button>
        </Link>
      </div>
    </>
  );
}
