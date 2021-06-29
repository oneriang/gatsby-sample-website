import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Meta from "../components/meta"

export default () => (
  <Layout>
    <Meta
      title="トップページ"
      desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
    />
    <div>
      <p>トップページのメインコンテンツ！</p>
      <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
        Tailwind test
      </button>
      <Link to={"/second/"}>Secondページへのリンク</Link>
      <Image filename="sample1.jpeg" alt="サンプル画像" />
    </div>
  </Layout>
)