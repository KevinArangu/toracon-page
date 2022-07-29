import Head from "next/head"
import GoogleTagManager from "./GoogleTagManager"

const Heads = () => {
  return (
    <Head>
      <title>Toracon Venezuela</title>
      <GoogleTagManager />
    </Head>
  )
}

export default Heads
