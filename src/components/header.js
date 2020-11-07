import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navigation">
        <AniLink
          paintDrip
          duration={.5}
          hex="#33333"
          top="entry"
          bg="#333"
          to="/"
          className="site-title navLink"
        >
          lcsataides
      </AniLink>

      <div
        className="navsecondary"
        >
          <AniLink
            paintDrip
            duration={.5}
            hex="#33333"
            to="/about/"
            className="navlink"
          >about</AniLink>
          <AniLink
            paintDrip
            duration={.5}
            hex="#33333"
            to="/work/"
            className="navlink"
          >work</AniLink>
        </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
