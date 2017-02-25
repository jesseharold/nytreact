import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Search from './components/Search';
import Saved from './components/Saved';

export default () => {
	return <Route path="/" component={Main}>
		<IndexRoute component={Search}/>

		<Route path="/search" component={Search}/>
		<Route path="/saved" component={Saved}/>
	</Route>;
};