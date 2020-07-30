import React from 'react'
import Text from '@components/Text'
import { Root, Avatar } from './styles'

interface Props {
  avatar: string
  username: string
}

const Card: React.FC<Props> = ({ avatar, username }) => {
  return (
    <Root>
      <Avatar src={avatar} alt={username} />
      <Text as="span">@{username}</Text>
    </Root>
  )
}

export default Card
