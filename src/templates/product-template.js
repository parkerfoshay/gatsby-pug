import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const productTemplate = ({ data: { contentfulProduct }, location }) => {
  console.log(contentfulProduct.image[0].file.url)

  return (
    <Layout>
      <div
        style={{
          marginLeft: "0 auto",
          width: "100%",
          textAlign: "center",
          
        }}
      >
        <h2>
          {contentfulProduct.name} -{" "}
          <span style={{ color: "#ccc" }}>
            Added on {contentfulProduct.createdAt}
          </span>
        </h2>
        <h4>{contentfulProduct.price}</h4>
        <p>{contentfulProduct.description}</p>
        <button
          style={{
            background: "darkorange",
            color: "white",
            margin: "10px",
            padding: "0.3em",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="snipcart-add-item"
          data-item-id={contentfulProduct.id}
          data-item-price={contentfulProduct.price}
          data-item-image={contentfulProduct.image[0].file.url}
          data-item-name={contentfulProduct.name}
          data-item-url={location.pathname}
        >
          Add to Cart
        </button>
        <Img
          style={{ margin: "0 auto", maxWidth: "600px" }}
          fluid={contentfulProduct.image[0].fluid}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      price
      name
      description
      createdAt(formatString: "MMMM Do, YYYY")
      image {
        file {
          url
        }
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default productTemplate
