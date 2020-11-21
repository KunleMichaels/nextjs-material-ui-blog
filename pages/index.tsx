import { getSortedPostsData, getSortedTopics } from '../src/lib/posts'
import { GetStaticPropsResult } from 'next'
import { PostData } from '../src/types/posts'
import React, { ReactElement } from 'react'
import { Grid, Typography } from '@material-ui/core'
import styles from '../styles/Home.module.css'
import Box from '@material-ui/core/Box'
import TopicsDisplay from '../src/components/TopicsDisplay'
import PreviewCard from '../src/components/PreviewCard'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Home = ({ postsData, sortedTopics }: { postsData: PostData[]; sortedTopics: string[] }): ReactElement => {
  const large = useMediaQuery('(min-width:700px)')

  return (
    <Grid container>
      <Grid item xs={12} className={styles.headings}>
        <Box p={5}>
          <Typography variant={large ? 'h1' : 'h4'}>DevFullStack</Typography>
          <Typography className={styles.secondHeading} variant={large ? 'h3' : 'h6'}>
            A tech blog.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TopicsDisplay topics={sortedTopics} n={5} />
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Grid container spacing={3} justify="flex-start" style={{ width: '95%', margin: 'auto' }}>
            {postsData.map((pd) => (
              <Grid key={pd.id} item xs={12} md={6} lg={4}>
                <PreviewCard post={pd} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    postsData: PostData[]
    sortedTopics: string[]
  }>
> => {
  const sortedTopics = getSortedTopics()
  const postsData = getSortedPostsData()
  return {
    props: {
      postsData: postsData.filter((pd) => pd.featured),
      sortedTopics,
    },
  }
}

export default Home
