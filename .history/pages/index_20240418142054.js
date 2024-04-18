import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";
import HorizontalBar from "@/components/Ho";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <BarChart/>
          <HorizontalBar/>
        </div>
      </main>
    </>
  );
}
