import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    Copyright© {new Date().getFullYear()}, {` `}<Link to="/">Lucas Ataides</Link>
  </footer>
)

export default Footer