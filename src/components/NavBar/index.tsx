import React from 'react'
import Link from 'next/link'
import Logo from '@components/Logo'
import SearchBar from '@components/SearchBar'
import { Root } from './styles'

const NavBar: React.FC = () => {
  return (
    <Root>
      <Link href="/" passHref>
        <a style={{ textDecoration: 'none' }}>
          <Logo />
        </a>
      </Link>
      <SearchBar />
      <div></div>
    </Root>
  )
}

export default NavBar
