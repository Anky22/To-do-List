import React from 'react';
import ReactSearchBox from 'react-search-box';
import Calender from './Calender';
import {Router} from 'react-router-dom';
import history from './history';
import Routes from './routes';
import {Link} from 'react-router-dom';
//import Show from '/Show';
import './Toolbar.css';
class Toolbar extends React.Component
{

	constructor(props)
	{
		super(props);
	}
	onNavigateHome()
	{
		//const list={this.props.list.map()};
		return(
		 <Router history={history}>
            <Routes/>
          </Router>
          );
		
	}


	render(){
		

		return(
	<header className="toolbar">
		<nav className="toolbar_navigation"> 
			<div> </div>
			
		
			<div className='toolbar_navigation_items'>
				<ul>

					<li><button> <a href='../public/index.html'>Home</a></button></li>
					<li><button onClick={this.onNavigateHome}>Progress</button></li>
					<li><ReactSearchBox placeholder="Search"/></li>
      
     
				</ul>
			</div>
		</nav>
	</header>
);
}
}

export default Toolbar;