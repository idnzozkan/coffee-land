import React from "react"
import styled from "styled-components"

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
  max-width: 90vw;
  min-height: 90vh;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export default Layout
