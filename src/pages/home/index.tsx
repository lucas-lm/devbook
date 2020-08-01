import Hero from '@widgets/Hero'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>devbook - home</title>
      </Head>
      <Hero margin={2} />
    </>
  )
}

export default Home
