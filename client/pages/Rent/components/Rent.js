import React from 'react'
import { Link } from 'react-router'
import { Row,Col,Thumbnail } from 'react-bootstrap'
import ReactDOM from 'react-dom'

class Rent extends React.Component {

	constructor(props){
	    super(props);
//	    this.state = {
//	    	allimages: true,
//	    	selected: 0	    	
//	    }
//	    this. toggledisplay=this.toggledisplay.bind(this)	
	  }

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
	
	componentWillMount(){
		console.log("mount Rent")
	
	}	
	
	componentDidMount(){		
		console.log("mount Rent")
		
//		this.toggledisplay()
//		ReactDOM.findDOMNode(this.refs.startimages).style.display = '';
		
//		ReactDOM.findDOMNode(this.refs.startimages).style.display ='default';
//		if (this.props.params.id){
//			
//			ReactDOM.findDOMNode(this.refs.startimages).style.display ='none'
//			
//		} else {
//			ReactDOM.findDOMNode(this.refs.startimages).style.display =''
//		
//		}
		
		
		   
	}
	
	componentWillReceiveProps(){

	}
	
	componentDidUpdate(prevProps) {
		
//		this.toggledisplay()

					
 }
	
			
  render() {
//	  var rentobjs = REAL_ESTATE_OBJS;
//	  
//	  var images = [];
//
//	  for  (var i = 0; i <  rentobjs.length; i++) {

//		  images.push(<Grid key={`${i}`}><Row> <Link to={`/rent/details/${rentobjs[i].id}`}><Image className='aparimg' src={`/images/${rentobjs[i].id}/0.jpg`} rounded /></Link></Row><Row>{`${rentobjs[i].name}`}</Row></Grid>);
//		  images.push(<Link key={`${i}`} to={`/rent/details/${rentobjs[i].id}`}><Thumbnail src={`/images/${rentobjs[i].id}/0.jpg`}><h4>{rentobjs[i].name}  {rentobjs[i].total_area}m²  {rentobjs[i].city}</h4><h3>Price: {rentobjs[i].actions.action[1].price} euro/month</h3> </Thumbnail></Link>);
	
//	  }

	  
    return (
      <div>
        <h2>Details</h2>

                     
        
      </div>
    )
  }

}

//module.exports = Rent
export default Rent;