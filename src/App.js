import React from 'react';

import './App.css';
import Customerlist from './components/Customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Addtraining from './components/Addtraining';
import Trainingslist from './components/Trainingslist';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Calendar from './components/Calendar';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#009688',
    
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
      setOpen(true);
  };

  return (
    <div className="App">
      <AppBar position="static"
        className={clsx(classes.appBar)}>
        <Toolbar>          
          <Typography variant="h6">
            PersonalTrainer
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter >
         <div>
                <Switch>
                    <Route exact path="/" component={Customerlist} />
                    <Route path="/trainings" component={Trainingslist} />
                    <Route path="/calendar" component={Calendar} />
                </Switch>
          </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
