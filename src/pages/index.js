import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
    <section
      className="hello">
      <h1>Hi, I'm Lucas Ataides</h1>
      <p><span className="highlight">Creative Product Designer, 27.</span> Mostly known for his own multidisciplinary expertise. Currently studying Front-end Development and UX Design. Aspiring to be a resourceful solution-driven digital professional.</p>
    </section>
    <section className="case-list">
      {data.allMarkdownRemark.edges.map(post => (
        <div
          className="case-list_item"
          key={post.node.id}>
            <Link
              exit={{
                length: 1
              }}
              entry={{
                delay: 0.6
              }}
              to={post.node.frontmatter.path}
              className="random">
              <Img
                className="featureImg"
                fluid={post.node.frontmatter.featureImg.childImageSharp.fluid}
                fadeIn
              />
                <div
                  className="case-list_box">
                  <h3 className="case-box_title">{post.node.frontmatter.title}</h3>
                  <div className="case-box_desc">
                    <p>{post.node.frontmatter.description}</p>
                  </div>
                </div>
              </Link>
          </div>
        )
      )}
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___num], order: ASC}
      limit: 10
      ) {
      edges {
        node {
          id
          frontmatter {
            num
            featureImg {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            year
            path
            title
            description
          }
        }
      }
    }
  }
`