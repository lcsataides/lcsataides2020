import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Work = ({data}) => (
  <Layout>
    <SEO title="Work" />
    <section className="case-list">
      {data.allMarkdownRemark.edges.map(post => (
        <div
          className="case-list_item"
          key={post.node.id}>
          <AniLink
            paintDrip
            duration={.5}
            hex="#33333"
            to={post.node.frontmatter.path}
            className="case-list_box">
              <h3 className="case-box_title">{post.node.frontmatter.title}</h3>
              <span className="case-box_year">{post.node.frontmatter.year}</span>
            <div className="case-box_desc">
              <p>{post.node.frontmatter.description}</p>
            </div>
            </AniLink>
          </div>
        )
      )}
    </section>
    <section class="case-soon"><h4>There's more to come!<br/> Soon I will be adding other cases</h4></section>
  </Layout>
)

export default Work


export const workQuery = graphql`
  query workQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
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
