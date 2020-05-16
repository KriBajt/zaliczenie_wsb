import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { ShowCard } from '../components/Card/ShowCard';

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
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/showcard" component={ShowCard} />
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