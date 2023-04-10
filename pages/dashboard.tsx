import React from "react";
import Head from "next/head";
import LogIn from "../components/LogIn";
import Header from "../components/Header";
import UserDashboard from "../components/UserDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

function dashboard() {
  return (
    <ProtectedRoute>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <UserDashboard />
    </ProtectedRoute>
  );
}

export default dashboard;
