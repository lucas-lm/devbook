import React from 'react'
import Link from 'next/link'
import Text from '@components/Text'
import { Avatar } from './styles'

interface Props {
  image: string
  username: string
  name: string
  bio: string
  github: string
}

const UserDetails: React.FC<Props> = ({
  name,
  username,
  image,
  bio,
  github,
}) => {
  return (
    <a href={github} target="_blank" rel="noopener">
      <main style={{ maxWidth: '600px' }}>
        <Text size={1.5}>
          {name} | @{username}
        </Text>
        <Avatar user={username} src={image} />
        <br />
        <Text weight={300} style={{ display: 'inline' }}>
          {bio}
        </Text>
      </main>
    </a>
  )
}

export default UserDetails
