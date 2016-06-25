import { render } from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
//import rootRoute from 'pages/routes';
import stubbedCourses from './stubs/REAL_ESTATE_OBJS'
import 'index.html';
import 'general.scss';

const rootRoute = {
		  component: 'div',
		  childRoutes: [ {
		    path: '/',
		    component: require('./components/App'),
		    childRoutes: [
		      require('./routes/Rent') 
//		      require('./routes/Sale'),
//		      require('./routes/Apartment'),
//		      require('./routes/Course'),
//		      require('./routes/Grades'),
//		      require('./routes/Messages')
//		      require('./routes/Profile')
		    ]
		  } ]
		}
render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
);
