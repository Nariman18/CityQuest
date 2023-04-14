import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import EscapeFromTower from "../components/EscapeFromTower";

function secondGameCard() {
  return (
    <div>
      <Head>
        <title>Escape From Tower</title>
        <link rel="icon" href="/img/32.png" />
      </Head>

      <Header />

      <div>
        <EscapeFromTower />
      </div>
    </div>
  );
}

export default secondGameCard;
