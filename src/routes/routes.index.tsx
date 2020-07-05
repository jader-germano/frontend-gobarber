import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/sign-in.index';
import SignUp from '../pages/SignUp/sign-up.index';

const Routes: React.FC = () => (
    <>
        <Switch>
            <Route path="/login" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
        </Switch>
    </>
);

export default Routes;
