import React from 'react'
import { Link } from 'react-router'
import forrent_sign from './images/forrent-sign.jpg'
import forsail_sign from './images/forsale-sign.jpg'

class Dashboard extends React.Component {
  render() {
    
    return (
      <div>
 
      	<Link to='/rent'><img src={forrent_sign} width='300'/></Link>
      	<Link to='/sale'><img src={forsail_sign}  width='300'/> </Link>  
                
      </div>
    )
  }
}

export default Dashboard
