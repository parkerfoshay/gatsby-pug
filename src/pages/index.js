import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To My Gatsby Demo</h1>
    <p>I built this website using Gatsby.JS and it is not meant to show off any form of design. This was me testing and learning Gatsby with the help of React, React Bootstrap and node.JS. I also used this project to get more familiar with snipcart and using a headless CMS. Having a chance to work with graphql was a bonus too.
</p>
    <p> Have a look around and play with the functionality of this website. Every page was created programmatically by pulling information from my CMS. The blogs were just me playing with that feature in the beginning but I decided to leave them in for reference. The store is just a bunch of pictures of my Pug. Nothing is really for sale, it’s just filler content. Enjoy!
</p>
   <p><strong>Update:</strong> I added user authentication and login! Give it a try to see more pictures in the store!</p>
  </Layout>
)

export default IndexPage
