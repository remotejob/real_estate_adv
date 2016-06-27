import React, {Component, PropTypes} from 'react';
import { Link,browserHistory } from 'react-router'
import { Modal,Button,Carousel,CarouselItem} from 'react-bootstrap'

export default class ModalShowAllImg extends Component {
	
	
	
	state = {
			 showModal: false
			    	
			 }
	
	static contextTypes = {
		    router: React.PropTypes.object.isRequired
		}

	
	 close = (e)=>{
	      this.setState({
	        showModal : false
	      
	      });
	      console.log(this.context)
	      this.context.router.push('/rent/details/'+this.props.id)

	    }

	
	 componentDidMount(){
	
	  this.setState({ showModal: true });
			
			   
	 }
	
	render() {

		var realestOBJ = REAL_ESTATE_OBJS[this.props.id]
		 var images = [];
		
	 for (var i = 0; i < realestOBJ.actions.action[1].images.image.length; i++) {
	 images.push(<CarouselItem key={`${i}`}><img width={900} height={500} alt="900x500" src={`/images/${realestOBJ.id}/karusel/${i}.jpg`}/></CarouselItem>);
	 }
	
		return (
				<div>
				 <Modal show={this.state.showModal} onHide={this.close}>
              
<Modal.Header>
<Modal.Title>{realestOBJ.name} {realestOBJ.total_area}m² {realestOBJ.city}</Modal.Title>
</Modal.Header>

<Modal.Body>
                  
<Carousel>
{images}
</Carousel>
                              
</Modal.Body>

<Modal.Footer>
<Button onClick={this.close}>Close</Button>
</Modal.Footer>

       
</Modal>
              

				
				</div>
	)	
		
	}
	
	
}

