import React from "react"
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => (
  <section className="contact">
    <h2 className="section-title">Mail me</h2>
    <p>Hit me up for any critics, suggestions or some random talk.</p>

    <ul className="contactlist">
      <li><a href="mailto:lcsataides@gmail.com">e-mail <FiArrowUpRight/></a></li>
      <li><a href="https://www.behance.net/lucasataides">behance <FiArrowUpRight/></a></li>
      <li><a href="https://www.linkedin.com/in/lcsataides/">linkedin <FiArrowUpRight/></a></li>
      <li><a href="https://instagram.com/lcsataides">instagram <FiArrowUpRight/></a></li>
    </ul>
  </section>
)

export default Contact
