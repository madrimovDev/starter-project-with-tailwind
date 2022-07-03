import { useEffect } from "react";
import Layout from "../layouts/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      
    </div>
  );
};

Home.layout = (page) => <Layout children={page} />

export default Home;
