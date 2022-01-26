import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonComponent() {
  return (
    <>
      <Grid container>
        <Typography>Total:</Typography>
        <Skeleton width={30} />
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        <Grid>
          <Skeleton width={210} height={180} animation="wave" />
          <Skeleton variant="text" height={30} animation="wave" />
          <Skeleton variant="text" animation="wave"/>
          <Skeleton variant="text" animation="wave" />
        </Grid>
        <Grid>
          <Skeleton width={210} height={180} animation="wave" />
          <Skeleton variant="text" height={30} animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
        </Grid>
        <Grid>
          <Skeleton width={210} height={180} animation="wave" />
          <Skeleton variant="text" height={30} animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
        </Grid>
        <Grid>
          <Skeleton width={210} height={180} animation="wave" />
          <Skeleton variant="text" height={30} animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
        </Grid>
      </Grid> 
    </>
  );
}
