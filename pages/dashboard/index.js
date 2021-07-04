import React from "react";
import Card from "../../components/dashboard/card/card";
import { makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Grid from "@material-ui/core/Grid";
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

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}>
          <Card title="user" stats="34343" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <Card title="Account" stats="3434" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <Card title="Bank" stats="233" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <Card title="We" stats="34" icon={<AttachMoneyIcon />} />
        </Grid>
      </Grid>
    </div>
  );
};
Dashboard.layout = "DashboardLayout";
export default Dashboard;
