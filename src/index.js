import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import rootReducer from './reducers';
import App from './containers/App';
import Register from './components/Register';
import Recipes from './containers/Recipes';
import Favs from './containers/Favs';
import Scan from './components/Scan';
import Single from './containers/Single';

import reset from './styles/reset.css';
import style from './styles/style.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Recipes} />
        <Route path='/favorites' component={Favs} />
        <Route path='/signin' component={Register} />
        <Route path='/scan' component={Scan} />
        <Route path='/single' component={Single} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
