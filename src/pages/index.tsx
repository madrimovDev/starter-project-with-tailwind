import { useEffect } from "react";
import Layout from "../layouts/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <h1>Hello world</h1>
    </div>
  );
};

Home.layout = (page) => <Layout children={page} />

export default Home;
