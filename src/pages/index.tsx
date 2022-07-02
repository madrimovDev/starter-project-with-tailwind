import { useEffect } from "react";
import ToggleButton from "../components/other/toggleButton";
import useColorMode from "../hooks/useColorMode";
import Layout from "../layouts/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <ToggleButton />
    </div>
  );
};

Home.layout = (page) => <Layout children={page} />

export default Home;
