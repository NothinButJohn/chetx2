import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import * as ROUTES from '../routes'
import Tyler from './Tyler'
import Home from './Home'

export default function Navigation() {
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={ROUTES.HOME}>Home</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.TYLER}>Ty Ler</Link>
                        </li>
                    </ul>
                </nav>

                {
                    <Switch>
                        <Route path={ROUTES.TYLER} ><Tyler /></Route>
                        <Route path={ROUTES.HOME} ><Home /></Route>
                    </Switch>
                }
            </div>
        </Router>
    )
}