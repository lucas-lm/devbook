import { NextPage, GetServerSideProps } from 'next'
import GHStats from '@components/GithubStats'
import UserDetails from '@components/UserDetails'
import Root, { Section } from '@layouts/Dev'
import api from '@services/api'

interface Repo {
  name: string
}

interface Props {
  username: string
  name: string
  hireable: boolean
  bio: string
  avatar_url: string
  repos: Repo[]
}

const DevPage: NextPage<Props> = (props) => {
  return (
    <Root>
      <Section>
        <UserDetails
          image={props.avatar_url}
          username={props.username}
          bio={props.bio}
          name={props.name}
        />
      </Section>
      <Section>
        <GHStats username={props.username} />
        <GHStats username={props.username} variant="langs" />
      </Section>
      <Section>
        {props.repos.map(({ name }) => (
          <GHStats
            key={name}
            username={props.username}
            variant="repo"
            repo={name}
          />
        ))}
      </Section>
    </Root>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { username } = params
  const { data: dev } = await api.get(`/users/${username}`)
  const { data: repos } = await api.get(`/users/${username}/repos`)
  console.log(dev)
  return { props: { ...dev, username: dev.login, repos } }
}

export default DevPage
