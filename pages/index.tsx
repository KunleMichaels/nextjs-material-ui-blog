import { getSortedPostsData, getSortedTopics } from '../src/lib/posts'
import { GetStaticPropsResult } from 'next'
import { PostData } from '../src/types/posts'
import React, { ReactElement } from 'react'
import { Grid, Typography } from '@material-ui/core'
import styles from '../styles/Home.module.css'
import Box from '@material-ui/core/Box'
import TopicsDisplay from '../src/components/TopicsDisplay'

const Home = ({ postsData, sortedTopics }: { postsData: PostData[]; sortedTopics: string[] }): ReactElement => {
  return (
    <Grid container>
      <Grid item xs={12} className={styles.headings}>
        <Box p={5}>
          <Typography variant="h1">DevFullStack</Typography>
          <Typography className={styles.secondHeading} variant="h3">
            A tech blog.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TopicsDisplay topics={sortedTopics} n={5} />
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
