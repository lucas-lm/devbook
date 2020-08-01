import React from 'react'

interface Props {
  username: string
  variant?: 'stats' | 'langs' | 'repo'
  repo?: string
}

const srcUrl = (username: string, repo: string) => {
  const GhStatsAPI = 'https://github-readme-stats.vercel.app'

  return {
    stats: `${GhStatsAPI}/api?username=${username}&count_private=true&theme=dark&show_icons=true`,
    langs: `${GhStatsAPI}/api/top-langs/?username=${username}&theme=dark`,
    repo: `${GhStatsAPI}/api/pin/?username=${username}&repo=${repo}&theme=dark&show_icons=true`
  }
}

const GhStats: React.FC<Props> = ({
  username,
  variant = 'stats',
  repo = ''
}) => {
  const imageUrl = srcUrl(username, repo)[variant]
  return <img src={imageUrl} style={{ maxWidth: '90%' }} />
}

export default GhStats
