import React, { FC, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { PostData } from '../types/posts'
import { Box } from '@material-ui/core'
import Link from 'next/link'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'

type PreviewCardProps = {
  post: PostData
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    [theme.breakpoints.down('md')]: {
      width: 300,
    },
    height: 350,
    margin: 'auto',
    position: 'relative',
    cursor: 'pointer',
  },
  media: {
    height: 160,
  },
  actions: {
    right: 20,
    bottom: 10,
    padding: 5,
    position: 'absolute',
  },
}))
export const PreviewCard: FC<PreviewCardProps> = ({ post }): ReactElement => {
  const classes = useStyles()

  return (
    <Link href={`/blog/${post.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={`/small/${post.id}.png`} title={post.title} />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box pt={3}>
            <Button size="small" variant="text" className={classes.actions}>
              <VisibilityOutlinedIcon style={{ marginRight: 20 }} /> Learn More…
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Link>
  )
}

export default PreviewCard
