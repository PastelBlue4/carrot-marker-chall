import styles from "/styles/About.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function About() {
  const [aboutBillions, setAboutBillions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://billions-api.nomadcoders.workers.dev/person/${router.query.id}`
        )
      ).json();
      setAboutBillions(data);
    })();
  }, []);

  console.log(aboutBillions);
  return (
    <>
      <div>
        <Head>
          <title>갈끄니까~ - {aboutBillions.name}</title>
          <meta
            name="description"
            content="화성 갈끄니까~ mars? even better. "
          />
          <link rel="icon" href="/doge.png" />
        </Head>
      </div>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src={aboutBillions.squareImage} />
        </div>
        <div>
          <h1 className={styles.profileName}>{aboutBillions.name}</h1>
          <span>industries : {aboutBillions.industries}</span>{" "}
          <span>
            netWorth : {Math.ceil(aboutBillions.netWorth / 1000)} Billions
          </span>
          <span>country : {aboutBillions.country}</span>
        </div>
        <div className={styles.giveTitle}>
          <span>이 행임이 내게 물건을 사주신다면?</span>
        </div>
        <div className={styles.imgaeCointainer}>
          <div className={styles.subContainer}>
            <img
              className={styles.aboutImg}
              src="/e_tron_gt.jpeg"
              alt="대충 몰?루 티콘"
            />
            <span>
              {" "}
              e-tron gt {(aboutBillions.netWorth * 10000000000000) /
                168200000}{" "}
              대
            </span>
          </div>
          <div className={styles.subContainer}>
            <img
              className={styles.aboutImg}
              src="/merona.jpeg"
              alt="대충 몰?루 티콘"
            />
            <span>
              {" "}
              메로나 {(aboutBillions.netWorth * 10000000000000) / 500} 개{" "}
            </span>
          </div>
          <div className={styles.subContainer}>
            <img
              className={styles.aboutImg}
              src="/ddakunhangukbob.jpeg"
              alt="대충 몰?루 티콘"
            />
            <span>
              {" "}
              돼지국밥 무봤나 쥑인다 아이가
              {(aboutBillions.netWorth * 10000000000000) / 7000} 그릇
            </span>
          </div>
        </div>
        <br></br>
        <span>{aboutBillions.about}</span>
        <br></br>
        <span>{aboutBillions.bio}</span>
      </div>
    </>
  );
}
