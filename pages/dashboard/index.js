import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ScoreCard from "../../components/dashboard/scoreCard";
import PeopleIcon from "@material-ui/icons/People";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Orders" stats="5" icon={<ShoppingCartIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Users" stats="85" icon={<PeopleIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard
            title="Product"
            stats="1"
            icon={
              <EventAvailableIcon
                style={{
                  backgroundColor: "#556cd6",
                  color: "#fff",
                }}
              />
            }
          />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Balance" stats="0" icon={<AccountBalanceIcon />} />
        </Grid>
      </Grid>
    </div>
  );
};
Home.layout = "DashboardLayout";
export default Home;
