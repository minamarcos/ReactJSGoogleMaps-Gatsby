import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <ul>
      <Link className="navLink" to="">
        Home
      </Link>
      <Link className="navLink" to="">
        Best Places
      </Link>
      <Link className="navLink" to="">
        About
      </Link>
      <Link className="navLink" to="">
        contact
      </Link>
    </ul>
  </nav>
)

export default Nav
