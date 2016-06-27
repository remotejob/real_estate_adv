import React from 'react';
//import Header from 'components/Header';
//import List from 'components/List/List';
import ModalShowAllImg from './components/ModalShowAllImg'


export default (props,context) => (
		

 <ModalShowAllImg id={props.params.id} pathname={props.location.pathname} context={context}></ModalShowAllImg>

    	
   
);

