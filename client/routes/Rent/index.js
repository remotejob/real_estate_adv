//import App from './components/Rent';
//
//function errorLoading(err) {
//  console.error('Dynamic page loading failed', err);
//}
////
//function loadRoute(cb) {
//  return (module) => cb(null, module.default);
//}

//export default {
module.exports = {
//	component: App,
		  path: 'rent',
//				
		  getChildRoutes(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, [
		        require('./routes/Details')
	
		      ])
		    })
		  },
//
		  getComponent(location, cb) {
//	          System.import('./components/Rent')
//	            .then(loadRoute(cb))
//	            .catch(errorLoading);
		    require.ensure([], (require) => {
		      cb(null, require('./components/Rent'))
		    })
		  }
}