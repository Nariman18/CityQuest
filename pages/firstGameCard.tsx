import React from "react";
import Head from "next/head";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import ProtectedRoute from "../components/ProtectedRoute";
import InFootstepsOfOldCity from "../components/InFootstepsOfOldCity";

function firstGameCard() {
  return (
    <div>
      <Head>
        <title>In Footsteps Of Old City</title>
        <link rel="icon" href="/img/32.png" />
      </Head>

      <Header />

      <div>
        <InFootstepsOfOldCity />
      </div>
    </div>
  );
}

export default firstGameCard;
