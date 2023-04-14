import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import ForwardToFuture from "../components/ForwardToFuture";

function secondGameCard() {
  return (
    <div>
      <Head>
        <title>Forward To The Future</title>
        <link rel="icon" href="/img/32.png" />
      </Head>

      <Header />

      <div>
        <ForwardToFuture />
      </div>
    </div>
  );
}

export default secondGameCard;
