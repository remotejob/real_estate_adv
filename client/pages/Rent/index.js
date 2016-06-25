import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

const listItems = [
  { title: 'One' },
  { title: 'Two' },
  { title: 'Three' },
  { title: 'Four' }
];

export default () => (
  <article className="women">
    <Header title="Blog" className="header-red" />
    <List items={listItems} />
  </article>
);


//function errorLoading(err) {
//  console.error('Dynamic page loading failed', err);
//}
//
//function loadRoute(cb) {
//  return (module) => cb(null, module.default);
//}
//
//
////export default {
//module.exports = {
//		  path: 'rent',
//				
//		  getChildRoutes(nextState, cb) {
////		    require.ensure([], (require) => {
////		      cb(null, [
////		        require('./routes/Details')
////	
////		      ])
////		    })
//	          System.import('./routes/Details')
//	            .then(loadRoute(cb))
//	            .catch(errorLoading);
////	          require('./routes/Details')
//	          
//			  
//		  },
//
////		  getComponent(location, cb) {
////			    require.ensure([], (require) => {
////			      cb(null, require('./components/Rent'))
////			    })
////			  }	  
//		      getComponent(nextState, cb) {
//		          System.import('./components/Rent')
//		            .then(loadRoute(cb))
//		            .catch(errorLoading);
//		        }
//
//		}



