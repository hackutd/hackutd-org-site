import Head from 'next/head';

import Main from 'components/Main';

export default function Home() {
  return (
    <>
    <Head>
      <title>HackUTD</title>
      <meta 
        name="description" 
        content="We plan and host HackUTD, North America&apos;s largest 24 hour university-run hackathon. We also assist other hackathons as part of our greater endeavor to use hacking to bring people together to learn new things."
      />
      
      {/* Primarily for Apple iMessage previews. OG only works with an absolute path. 
          TODO: use a solution that generates this dynamically instead of requiring a weirdly specific link. */}
      <meta property="og:image" content={"/Logo Color Square.png"} />
    </Head>
    <Main />
    </>
  )
}
