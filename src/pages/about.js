import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FiLink } from "react-icons/fi"


const about = () => (
  <Layout>
    <SEO title="About" />
    <section
      className="about-wrapper">
      <h1>Hi!</h1>
      <div
        className="about-content">
        <p>I'm Lucas Ataides, I'm 27 years old. Currently living in Brasília, Brazil.</p>
        <p>I recently graduated Graphic Design, at IESB. I've been studying front-end development by myself since then as I strive to be a more well-rounded and digital professional.</p>
        <p>I like to picture myself as a generic curator of everything: tech enthusiastic, online gaming diver and a millenial musician of course. And I do love ovo-lacto vegetarian recipes, please share yours with me: <a href="mailto:lcsataides@gmail.com">lcsataides@gmail.com</a></p>
      </div>

      <section
        className="about-cv">
        <a href="http://bit.ly/cv-lcsataides-2020">
          <h5 className="experience-title">Download my full resume  </h5><FiLink /></a>
      </section>
    </section>
  </Layout>
)

export default about