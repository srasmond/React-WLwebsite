import React from 'react';
import { Link } from 'react-router-dom';

export class NotFoundPage extends React.Component{
	render(){
		return (
			<div className="notFound">
				<h1>Pagina niet gevonden</h1>
				<p>Sorry, er valt niets te beleven op deze pagina.</p>
				<p><Link to="/">Keer terug naar de startpagina</Link></p>
			</div>
		);
	}
}