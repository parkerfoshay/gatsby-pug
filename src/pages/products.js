import React from "react"
import { graphql, Link } from "gatsby"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import "bootstrap/dist/css/bootstrap.css"

import netlifyIdentity from 'netlify-identity-widget'


import Layout from "../components/layout"

class Products extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    this.getProducts()
    netlifyIdentity.on('login', user => this.getProducts(user))
    netlifyIdentity.on('logout', this.getProducts())
  }


  getProducts = user => {
    const allProducts = this.props.data.allContentfulProduct.edges
    const products = netlifyIdentity.currentUser() !== null ?
      allProducts : allProducts.filter(({ node: product}) => !product.private)
    this.setState({ products })
  }
  render() {
    const { products } = this.state
    return (
      <Layout>
        <Container>
          <CardDeck style={{ maxWidth: "100%" }}>
            {products.map(({ node: product }) => (
              <Row>
                <Link
                  to={`/products/${product.slug}`}
                  style={{ textDecoration: "none", color: "#551a8b" }}
                >
                  <Card
                    bg="light"
                    border="info"
                    style={{
                      width: "18rem",
                      padding: "10px",
                      margin: "10px 25px",
                    }}
                    key={product.id}
                  >
                    <Card.Img variant="top" src={product.image[0].file.url} />
                    <Card.Body>
                      <Card.Title>
                        {product.name}-{" "}
                        <span
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 300,
                            color: "f60",
                          }}
                        >
                          ${product.price}
                        </span>
                      </Card.Title>
                      <Card.Text>Click To See More</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Row>
            ))}
          </CardDeck>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          private
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default Products
