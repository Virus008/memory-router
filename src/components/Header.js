import React from "react";
import { Link, MemoryRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class Header extends React.Component {
  render() { 
	return (
      	<div>
			<Router>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<Link to="/" className="navbar-brand">Virus008</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav3" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="mynav3">
							<div className="navbar-nav">
								<Link className="nav-item nav-link" to="/about">About </Link>
								<Link className="nav-item nav-link" to="/contact">Contact </Link>								
							</div>
						</div>
					</div>
				</nav>
				<br></br>
				<div className="content">
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/about" component={About}></Route>
					<Route exact path="/contact" component={Contact}></Route>
				</div>
			</Router>
		</div>
	  );
  }
}


export default Header;






