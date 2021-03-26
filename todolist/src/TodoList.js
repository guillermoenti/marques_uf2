import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {

	addItem (_event) {
		_event.preventDefault();	
	}

	render() {
		return (
		<div>
			<h1>Lista de quehaceres</h1>
			<ul>
				<ListItem item="Uno" />
				<ListItem item="Dos" />
				<ListItem item="Tres" />
			</ul>
			<form onSubmit={this.addItem}>
				<p><input type="text" /></p>
				<p><button type="submit">Añadir</button></p>
			</form>
		</div>
		);
	}
}

export default TodoList
