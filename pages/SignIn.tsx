import React from "react";
import Head from "next/head";
import LogIn from "../components/LogIn";
import Header from "../components/Header";

function SignIn() {
  return (
    <div>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/img/32.png" />
      </Head>

      <Header />

      <main>
        <LogIn />
      </main>
    </div>
  );
}

export default SignIn;
