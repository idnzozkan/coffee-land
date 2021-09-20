import React, { Fragment } from "react"
import GlobalStyles from "./app/styles"
import Layout from "./app/layout"
import Content from "./app/components/Content"
import Sidebar from "./app/components/Sidebar"

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <Content />
      </Layout>
    </Fragment>
  )
}

export default App
