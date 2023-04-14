import React from "react";
import Head from "next/head";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import ProtectedRoute from "../components/ProtectedRoute";

function userProfileChange() {
  return (
    <div>
      <Head>
        <title>User Profile Change</title>
        <link rel="icon" href="/img/32.png" />
      </Head>

      <Header />

      <UserProfile />
    </div>
  );
}

export default userProfileChange;
