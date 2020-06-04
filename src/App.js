import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';

import theme from './theme';
import { configureStore } from './store';
import routes from './routes';
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './utils/firebase';
import './assets/scss/index.scss';


class App extends Component {

  saveState = () => {
    const state = configureStore().getState();
    localStorage.setItem('GLOBAL_STATE', JSON.stringify(state));
  }

  componentDidMount(){
  //  console.log(configureStore().getState())
   // window.addEventListener('unload', this.saveState);
  }

  render(){
    const history = createBrowserHistory();
    const store = configureStore();

    //  const App = () => {
      return (
        <StoreProvider store={store}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Router history={history}>
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                {renderRoutes(routes)}
              </Router>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </StoreProvider>
      );
    //};
  }
}

export default App;