
//file for routing

import React from'react' ;
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import Calender from './Calender';
import App from './App';
import Login from './Login';
import './App.css';
import Show from './Show';

const Routes=()=>
{
	return(
		<div>
		<Switch>

			<Route exact path="/" component={Login}>
				<Login/>
			</Route>
			<Route exact path="/dashboard">
				<Show />
			</Route>
		</Switch>
		</div>

	);
}

export default Routes;


