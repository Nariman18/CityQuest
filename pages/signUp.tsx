import React from "react";
import Head from "next/head";
import SignUp from "../components/SignUp";
import Header from "../components/Header";

function signUp() {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/img/32.png" />
      </Head>

      <Header />

      <main>
        <SignUp />
      </main>
    </div>
  );
}

export default signUp;
