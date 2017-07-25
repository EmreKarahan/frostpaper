import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// import * as $ from 'jquery';
// import * as JQuery from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const container = document.getElementById('container');
//ReactDOM.render(<App />, container);



ReactDOM.render((
    <Router>
        <Route path="/login" component={App} />
        {/* <Route path="/users" component={Users} />
    <Route path="/widgets" component={Widgets} /> */}
    </Router>
), container);