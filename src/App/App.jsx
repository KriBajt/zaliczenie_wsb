import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage'
import { CardBoard } from '../CardBoard'
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import CardLists from '../components/CardLists';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Switch>
                    <Router history={history} >
                        <div>
                            {/* {console.log(this.props)} */}
                            <PrivateRoute exact path="/" component={HomePage} />
                            <PrivateRoute path="/:tableID" component={CardBoard} user={this.user} tableID={this.tableID} />
                            {/* <Route path="/cardlists" component={CardLists} user={this.user} table={this.table} /> */}
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />

                        </div>
                    </Router>
                </Switch>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };