import React, {Component, PropTypes} from 'react';
import { Button,Row,Grid,Image } from 'react-bootstrap';
import { Link } from 'react-router'

export default class Dashboard extends Component {
	
	
	componentDidMount(){
	
	console.log("mount Dashboard ")
	console.log(this.props.children)
			   
}
	
	render() {
		
	  var realestOBJ = REAL_ESTATE_OBJS[this.props.id]
	  var modallink = "/rent/details/"+this.props.id+"/modal";
	  var images = [];

	  for (var i = 0; i <  realestOBJ.actions.action[1].images.image.length; i++) {

			images.push(<Image key={`${i}`} src={`/images/${realestOBJ.id}/thumbs/${i}.jpg`}  thumbnail />);

		}	
		
	
        return (
 
            
            <div>
            <h3>Details: {realestOBJ.name} {realestOBJ.total_area}m²  {realestOBJ.city}</h3>  
           <p><Link to={modallink}><Button bsStyle="primary" bsSize="large">All images</Button></Link></p>
            {images}
            
            {this.props.children }
            </div>
            
            
            
        );
    }
	
}



//import React from 'react'
//import { Link } from 'react-router'
//import { Button,Row,Grid,Image } from 'react-bootstrap';
//
//class Dashboard extends React.Component {
//	
//	componentDidMount(){
//		
//		console.log("mount Dashboard ")
////		console.log(this.props.props.params)
//				   
//	}
//	componentWillReceiveProps(){
//		console.log(" Rent Dashboard receive props")
//		console.log(this.props)
//	}
//	
//  render() {
//	  
//	  console.log(this.props)
////	  var realestOBJ = REAL_ESTATE_OBJS[this.props.params.id]
////	  var modallink = "/rent/details/"+this.props.params.id+"/modal";
////	  var images = [];
////
////	  for (var i = 0; i <  realestOBJ.actions.action[1].images.image.length; i++) {
////
////			images.push(<Image key={`${i}`} src={`/images/${realestOBJ.id}/thumbs/${i}.jpg`}  thumbnail />);
////
////		}
//	  
//    return (
//      <div>
//
//        {this.props.children }
//      </div>
//    )
//  }
//
//}
//
//module.exports = Dashboard