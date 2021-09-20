import React from "react"
import styled from 'styled-components'
import Search from "./Search"
import Categories from './Categories'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Search />
      <Categories />
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  width: 17vw;
  overflow:hidden;

  @media (max-width: 960px) {
    width: 100%;
  }
`

export default Sidebar
