import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import routes from './routes';

import {configureStore} from './routes/store'

const store = configureStore(hashHistory);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {/* {routes} */}
        </Router>
    </Provider>,
    document.getElementById('root')
);