import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

import Home from './Home';
import Search from './Search';
import Survey from './Survey';
import NotFound from './NotFound';

import Header from '../components/Header';

function PrivateRoute({ path, component }) {
  const isLoggerIn = true;

  return isLoggerIn ? <Route path={path} component={component} /> : <Redirect to="/" />;
}

function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/404" component={NotFound} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/survey" component={Survey} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
