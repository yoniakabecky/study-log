import React, { ReactElement } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import Link from "./NonDecorationLink";

interface Props {
  title: string;
  image: string;
  href: string;
  tags?: string[];
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 300
    },
    cardMedia: {
      height: 180
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    }
  })
);

export default function ArticleIndexCard({
  title,
  image,
  href,
  tags
}: Props): ReactElement {
  const classes = useStyles();

  return (
    <Link href={href}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia image={image} title={title} className={classes.cardMedia} />

          <CardContent>
            <Typography variant="h6" component="h2">
              {title}
            </Typography>

            <div className={classes.chips}>
              {tags && tags.map((tag, i) => (
                <Chip size="small" label={`#${tag}`} key={`hashtag-${i}`} />
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

