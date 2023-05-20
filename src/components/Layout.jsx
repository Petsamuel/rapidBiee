import { Fragment } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

