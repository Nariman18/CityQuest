import React from "react";
import Head from "next/head";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import ProtectedRoute from "../components/ProtectedRoute";

function firstGameCard() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>Hello World</div>
    </div>
  );
}

export default firstGameCard;
