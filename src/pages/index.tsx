import Head from "next/head";
import { Layout } from "@components/Layout";

export default function Index() {
  const title = "Spotify Tracker";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout title={title}>
        <h1>content</h1>
      </Layout>
    </>
  );
}
