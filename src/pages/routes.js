import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Header from '../components/Header';

function PrivateRoute({ path, component }) {
  const isLoggerIn = true;

  return (
    isLoggerIn ? <Route path={path} component={component} /> : <Redirect to="/" />
  );
}

function Routes() {

  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;
