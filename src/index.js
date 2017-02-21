import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import rootReducer from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import Recipes from './components/Recipes';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Recipes} />
        <Route path='/signin' component={SignIn} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
