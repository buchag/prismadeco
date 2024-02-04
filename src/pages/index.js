import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>PRISMA DECO</title>
        <meta name="description" content="Prisma Deco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iconprisma.png" />
      </Head>

      <main>
        <Banner />
        <Navbar />
      </main>
    </>
  );
}
