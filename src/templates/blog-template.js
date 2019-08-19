import React from "react"
import { graphql, Link } from "gatsby"


import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`

  return (
    <Layout>
      <div>
        <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
          hello From page 3
        </h1>

        <h4>{data.allMarkdownRemark.totalCount} Post</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/posts${node.fields.slug}`}>
              {" "}
              <h3>
                {node.frontmatter.title}{" "}
                <span style={{ color: "#bbb" }}>- {node.frontmatter.date}</span>
              </h3>{" "}
              
            </Link>


            <p>{node.excerpt}</p>
          </div>
        ))}
        {/* { paginated links} */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: 300,
            margin: "0 auto",
          }}
        >
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
              {index + 1}
            </Link>
          ))}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}

          
          
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(skip: $skip, limit: $limit sort: { order: DESC, fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          excerpt(truncate: false)
          id
        }
      }
    }
  }
`
