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

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import ProfilePage from '../ProfilePage';
import BotPage from '../BotPage';
import history from '../../utils/history';
import CustomDrawer from '../../components/Drawer';
import AppHeader from '../../components/Header';

const App = () => {
  const [drawerOpened, toggleDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div>
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
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/bot" component={BotPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
