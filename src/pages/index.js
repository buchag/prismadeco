import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Prisma Deco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Banner />
        <Navbar />
      </main>
    </>
  );
}
