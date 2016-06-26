import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

const listItems = [
  { title: 'Expand me', content: 'Thank you' },
  { title: 'Click me', content: 'Saved me' },
  { title: 'Tap me', content: 'Hey, watch it!' },
  { title: 'Open me', content: 'I am free' }
];

console.log(process.env.NODE_ENV)


export default () => (
  <article className="home">
    <Header title="test" className="header-blue" />
    <List items={listItems} collapsible />
  </article>
);

//
//
//
//import React from 'react'
//import { Link } from 'react-router'
//import { Row,Col,Thumbnail } from 'react-bootstrap'
//import ReactDOM from 'react-dom'
//
//class Rent extends React.Component {
//
//	constructor(props){
//	    super(props);
////	    this.state = {
////	    	allimages: true,
////	    	selected: 0	    	
////	    }
//	    this. toggledisplay=this.toggledisplay.bind(this)	
//	  }
//
//	toggledisplay(){
//		
//		if (this.props.params.id){
//			
//			ReactDOM.findDOMNode(this.refs.startimages).style.display ='none'
//			
//		} else {
//			ReactDOM.findDOMNode(this.refs.startimages).style.display =''
//		
//		}
//		
//	
//	}
//	
//	componentWillMount(){
//	
//	}	
//	
//	componentDidMount(){		
//		console.log("mount Rent")
//		
//		this.toggledisplay()
////		ReactDOM.findDOMNode(this.refs.startimages).style.display = '';
//		
////		ReactDOM.findDOMNode(this.refs.startimages).style.display ='default';
////		if (this.props.params.id){
////			
////			ReactDOM.findDOMNode(this.refs.startimages).style.display ='none'
////			
////		} else {
////			ReactDOM.findDOMNode(this.refs.startimages).style.display =''
////		
////		}
//		
//		
//		   
//	}
//	
//	componentWillReceiveProps(){
//
//	}
//	
//	componentDidUpdate(prevProps) {
//		
//		this.toggledisplay()
//
//					
// }
//	
//			
//  render() {
//	  
//	  var rentobjs = REAL_ESTATE_OBJS;
//	  
//	  var images = [];
//
//	  for  (var i = 0; i <  rentobjs.length; i++) {
//
////		  images.push(<Grid key={`${i}`}><Row> <Link to={`/rent/details/${rentobjs[i].id}`}><Image className='aparimg' src={`/images/${rentobjs[i].id}/0.jpg`} rounded /></Link></Row><Row>{`${rentobjs[i].name}`}</Row></Grid>);
//		  images.push(<Link key={`${i}`} to={`/rent/details/${rentobjs[i].id}`}><Thumbnail src={`/images/${rentobjs[i].id}/0.jpg`}><h4>{rentobjs[i].name}  {rentobjs[i].total_area}m²  {rentobjs[i].city}</h4><h3>Price: {rentobjs[i].actions.action[1].price} euro/month</h3> </Thumbnail></Link>);
//	
//	  }
//
//	  
//    return (
//      <div>
//        <h2>Rent</h2>
//                
//        <Row className="show-grid">
//        <Col ref='startimages'  xs={12} md={4}>{images}</Col>
//        <Col xs={6} md={8}>{this.props.children}</Col>
//      </Row> 
//                     
//        
//      </div>
//    )
//  }
//
//}
//
////module.exports = Rent
//export default Rent
//


////import App from './components/Rent';
////
//function errorLoading(err) {
//  console.error('Dynamic page loading failed', err);
//}
////
//function loadRoute(cb) {
//  return (module) => cb(null, module.default);
//}

//export default  {
////module.exports = {
////	component: App,
////		  path: 'rent',
////				
////		  getChildRoutes(location, cb) {
////		    require.ensure([], (require) => {
////		      cb(null, [
////		        require('./routes/Details')
////	
////		      ])
////		    })
////		  },
////
//		  getComponent(location, cb) {
////	          System.import('./components/Rent')
////	            .then(loadRoute(cb))
////	            .catch(errorLoading);
//		    require.ensure([], (require) => {
//		      cb(null, require('./components/Rent'))
//		    })
//		  }
//}