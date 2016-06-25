function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}


export default {
//module.exports = {
		  path: 'details',
				
		  getChildRoutes(partialNextState, cb) {
//		    require.ensure([], (require) => {
//		      cb(null, [
//		        require('./routes/Details')
//	
//		      ])
//		    })
	          System.import('./routes/ModalShowAllImg')
	            .then(loadRoute(cb))
	            .catch(errorLoading);
	          
			  
		  },

		      getComponent(partialNextState, cb) {
		          System.import('./components/Dashboard')
		            .then(loadRoute(cb))
		            .catch(errorLoading);
		        }
//		  getComponents(location, cb) {
//			    require.ensure([], (require) => {
//			      cb(null, 
//			    		  require('./components/Dashboard')
//			    		  
//			      )
////			        cb(null,{
////			        	chat: require('./components/Chat'),
////			        	main: require('./components/Details'),
////			        	objlist: require('./components/ObjList')
////			        })
//			    })
//			  
//		  }

		}
