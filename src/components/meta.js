import React from "react"
import { Helmet } from "react-helmet"

export default props => {
    const baseTitle = "サンプルサイト"
    const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle
    return (
        <Helmet>
            <html lang="ja" />
            <title>サンプルサイト</title>
            <meta name="description" content="説明文" />
        </Helmet>
  )
}