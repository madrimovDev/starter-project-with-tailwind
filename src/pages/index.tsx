import { useEffect } from "react"
import Article from "../components/home/article"
import Layout from "../layouts/layout"
import { NextPageWithLayout } from "./_app"

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Article/>
    </div>
  )
}

Home.layout = (page) => <Layout>{page}</Layout>

export default Home
