import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';


export default () => {
    const data = useStaticQuery(graphql`
    query SiteImgQuery {
        allFile {
            edges {
              node {
                relativePath
                size
                birthtime
                extension
              }
            }
          }
    }
  `)
  console.log(data)


  return(
      
        <Layout>
            <h1>hello From page 3</h1>
            <table>
                <thead>
                    <tr>
                        <th>relative path</th>
                        <th>size of image</th>
                        <th>extension</th>
                        <th>birth time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map((edge, index) => (
                        <tr key={index}>
                            <td>{edge.node.relativePath}</td>
                            <td>{edge.node.sizd}</td>
                            <td>{edge.node.extension}</td>
                            <td>{edge.node.birthtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to='page-2'>page 2</Link>
        </Layout>
    )
}
