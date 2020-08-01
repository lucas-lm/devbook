import styled from 'styled-components'

interface AvatarProps {
  user: string
}

export const Avatar = styled.img.attrs(({ user }: AvatarProps) => {
  return {
    alt: user,
    title: user
  }
})<AvatarProps>`
  height: 128px;
  width: auto;
  border-radius: 50%;
  float: left;
  shape-outside: circle();
  margin: ${({ theme }) => theme.spacing(0.5)};
`
