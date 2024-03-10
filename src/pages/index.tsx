import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "../components/Button"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Second client page</h1>
      <p>Added some new content.</p>
      <Button />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
