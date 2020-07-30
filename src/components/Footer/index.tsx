import React from 'react'
import Link from 'next/link'
import { Root, Anchor } from './styles'

const Footer: React.FC = () => {
  return (
    <Root>
      <span>
        Made by{' '}
        <Link href="/dev/lucas-lm" passHref>
          <Anchor>Lucas Miranda</Anchor>
        </Link>
      </span>
    </Root>
  )
}

export default Footer
