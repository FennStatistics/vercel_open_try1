import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//sfc
const Home = () => {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem 123 lorem 456</p>
      <p className={styles.text}>Knowledge is a form of awareness or familiarity. It is often understood as awareness of facts or as practical skills, and may also mean familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that propositional knowledge is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed. These controversies intensified due to a series of thought experiments by Edmund Gettier and have provoked various alternative definitions. Some of them deny that justification is necessary and suggest alternative criteria while others accept that justification is an essential aspect and formulate additional requirements. </p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
    </>
  );
}

export default Home;