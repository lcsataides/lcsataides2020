import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Template({ data,}) {
    const { markdownRemark: post } = data
    return (
      <Layout>
        <Helmet title={`lcsataides work - ${post.frontmatter.title}`} />
        <section className="case-wrapper">
        <Img
          className="featureImg"
          fluid={post.frontmatter.featureImg.childImageSharp.fluid}
          fadeIn
          />

          <div className="case-hello">
            <h2>{post.frontmatter.title}</h2>
            <h4>{post.frontmatter.year}</h4>
          </div>

          <div className="case-box">
            <div className="case-goal">
              <h4>Main Goal</h4>
              <p>{post.frontmatter.maingoal}</p>
            </div>
            <div className="case-features">
              <div className="case-stacks">
                <h4>Stacks</h4>
                <p>{post.frontmatter.stacks}</p>
              </div>
              <div className="case-role">
                <h4>Role</h4>
                <p>{post.frontmatter.role}</p>
              </div>
            </div>
          </div>
          <div
            className="case-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
      </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        featureImg {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        maingoal
        role
        stacks
        path
        title
        year
      }
    }
  }
`