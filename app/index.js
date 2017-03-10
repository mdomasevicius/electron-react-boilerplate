import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

import Datastore from 'nedb';

const itemsRepo = new Datastore({
  filename: './data/test.db'
});


render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);
