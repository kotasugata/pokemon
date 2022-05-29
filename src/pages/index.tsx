import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Text } from "react-md";

const Home: NextPage = () => {
  return (
    <>
      <Text type="headline-4">Hello, world!</Text>
      <Link href="/pokemon">ポケモン一覧はこちらだよ</Link>
    </>
  );
};

export default Home;
