import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { HomeScreen } from '../view-controllers/Home-screen';
import ChatScreen from '../view-controllers/Chat-screen';
import { SettingsScreen } from '../view-controllers/Settings-screen';
import { NotFoundScreen } from '../view-controllers/NotFound-screen';

function App(props) {
    return (
        <Provider store={props.store}>
            <Router>
              <div>
                <AppHeader />
                <section role="main">
                  <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/chats/:id?" component={ChatScreen} />
                    <Route path="/settings" component={SettingsScreen} />
                    <Route component={() => <NotFoundScreen code="404" />} />
                  </Switch>
                </section>
                <AppFooter />
              </div>
            </Router>
        </Provider>
      );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export { App };
