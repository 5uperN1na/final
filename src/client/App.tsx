import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pizza from './views/Home';
import Books from './views/BookList';
import Details from './views/Details';
import Edit from './views/Edit';
import Add from './views/Add';
import Login from './views/Login';
import Register from './views/Register';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC<AppProps> = (props) => {
	return (

		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Pizza />
				</Route>

				<Route exact path="/booklist">
					<Books />
				</Route>


				<PrivateRoute exact path="/details/:bookid">
					<Details />
				</PrivateRoute> 


				 <PrivateRoute exact path="/edit/:bookid">
					<Edit />
				</PrivateRoute> 


				<PrivateRoute exact path="/add">
					<Add />
				</PrivateRoute> 


				<Route exact path="/login">
					<Login />
				</Route>


				<Route exact path="/register">
					<Register />
				</Route> 

			</Switch>
		</BrowserRouter>
	);
}

interface AppProps { }

export default App;
