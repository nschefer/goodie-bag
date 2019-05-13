import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
//BrowserRouter uses '/' for routes, HashRouter uses '#'
import { getCandies } from '../reducers/candiesReducer';
import CandiesList from './CandiesList';
class Root extends React.Component {

  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Go Home</Link>
            <Link to="/candies">Go To Candies</Link>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" render={() => <h1>Welcome to the Goodie Bag!</h1>} />
              <Route exact path="/candies" component={CandiesList} />
              <Route render={() => <h2>Not Found</h2>} />
            </Switch>
          </main>

        </div>
      </BrowserRouter>
    )
  }
}

const mapsDispatch = (dispatch) => ({
  getCandies: () => dispatch(getCandies())
})

export default connect(null, mapsDispatch)(Root);
