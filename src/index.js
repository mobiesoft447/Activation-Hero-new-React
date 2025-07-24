import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Caviar from './views/caviar'
import UberEats from './views/uber-eats'
import AirportTrips from './views/airport-trips'
import DoorDash from './views/door-dash'
import DEACTIVATIONSUPPORT from './views/deactivation-support'
import Lyft from './views/lyft'
import Wridz from './views/wridz'
import AmazonFlex from './views/amazon-flex'
import OLA from './views/ola'
import Postmates from './views/postmates'
import UBER from './views/uber'
import Home from './views/home'
import GoPuff from './views/go-puff'
import Inride from './views/inride'
import Bolt from './views/bolt'
import EMPOWER from './views/empower'
import Drizzly from './views/drizzly'
import GrubHub from './views/grub-hub'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Caviar} exact path="/caviar" />
        <Route component={UberEats} exact path="/uber-eats" />
        <Route component={AirportTrips} exact path="/airport-trips" />
        <Route component={DoorDash} exact path="/door-dash" />
        <Route
          component={DEACTIVATIONSUPPORT}
          exact
          path="/deactivation-support"
        />
        <Route component={Lyft} exact path="/lyft" />
        <Route component={Wridz} exact path="/wridz" />
        <Route component={AmazonFlex} exact path="/amazon-flex" />
        <Route component={OLA} exact path="/ola" />
        <Route component={Postmates} exact path="/postmates" />
        <Route component={UBER} exact path="/uber" />
        <Route component={Home} exact path="/" />
        <Route component={GoPuff} exact path="/go-puff" />
        <Route component={Inride} exact path="/inride" />
        <Route component={Bolt} exact path="/bolt" />
        <Route component={EMPOWER} exact path="/empower" />
        <Route component={Drizzly} exact path="/drizzly" />
        <Route component={GrubHub} exact path="/grub-hub" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
