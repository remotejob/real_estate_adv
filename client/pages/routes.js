import App from 'containers/App';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(nextState, cb) {
        System.import('pages/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
//    require('pages/Rent'),
    {
        path: 'rent',
        getComponent(partialNextState, cb) {
          System.import('pages/Rent')
            .then(loadRoute(cb))
            .catch(errorLoading);
        }
      },      
      {
          path: 'rent/details',
          getComponent(partialNextState, cb) {
            System.import('pages/Rent/components/Rent')
              .then(loadRoute(cb))
              .catch(errorLoading);
          }
        },     
    {
      path: 'blog',
      getComponent(nextState, cb) {
        System.import('pages/Blog')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'about',
      getComponent(nextState, cb) {
        System.import('pages/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
  ]
};
