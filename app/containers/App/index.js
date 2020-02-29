/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import TutorialPage from '../TutorialPage';
import BotPage from '../BotPage';
import history from '../../utils/history';
import CustomDrawer from '../../components/Drawer';
import AppHeader from '../../components/Header';

const App = () => {
  const [drawerOpened, toggleDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div id="app">
      <nav>
        <CustomDrawer
          drawerOpened={drawerOpened}
          toggleDrawer={toggleDrawer}
          navigateToPage={(path, pageName) => {
            toggleDrawer(false);
            setCurrentPage(pageName);
            history.push(path)
          }}
        />
        <AppHeader openDrawer={() => toggleDrawer(true)} title={currentPage} />
      </nav>
      <div id="app-page">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tutorial" component={TutorialPage} />
            <Route exact path="/bot" component={BotPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
