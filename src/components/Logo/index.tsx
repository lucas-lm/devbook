import React from 'react'
import { Root, Text, Image } from './styles'

const Logo: React.FC = () => {
  return (
    <Root>
      <Image src="/assets/logo.svg" alt="logo" />
      <Text color="secondary">dev</Text>
      <Text color="primary">Book</Text>
    </Root>
  )
}

export default Logo
