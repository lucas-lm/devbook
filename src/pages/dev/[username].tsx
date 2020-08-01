/* eslint-disable camelcase */
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Details from '@components/Details'
import GHStats from '@components/GithubStats'
import UserDetails from '@components/UserDetails'
import Root, { Section } from '@layouts/Dev'
import api from '@services/api'

interface Repo {
  name: string
  html_url: string
}

interface Props {
  username: string
  name: string
  hireable: boolean
  bio: string
  location: string
  avatar_url: string
  html_url: string
  repos: Repo[]
}

const DevPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Profile of {props.username} - devbook</title>
      </Head>
      <Root>
        <Section>
          <UserDetails
            github={props.html_url}
            image={props.avatar_url}
            username={props.username}
            bio={props.bio}
            name={
              props.username === 'filipedeschamps' ? 'Michel Teló' : props.name
            }
          />
        </Section>
        <Details title="Github Stats" margin={[3, 0]}>
          <Section>
            <GHStats username={props.username} />
            <GHStats username={props.username} variant="langs" />
          </Section>
        </Details>
        <Details title="Repos" margin={[3, 0]}>
          <Section>
            {props.repos.map(({ name, html_url }) => (
              <a key={name} href={html_url} target="_blank" rel="noopener noreferrer">
                <GHStats
                  username={props.username}
                  variant="repo"
                  repo={name}
                />
              </a>
            ))}
          </Section>
        </Details>
      </Root>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ params: { username: string }}> = async ({ params }) => {
  if (!params) return { props: {} }
  const { username } = params
  const { data: dev } = await api.get(`/users/${username}`)
  const { data: repos } = await api.get(`/users/${username}/repos`)
  return { props: { ...dev, username, repos } }
}

export default DevPage
