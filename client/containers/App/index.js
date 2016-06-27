import React ,{ PropTypes } from 'react';
//import Toolbar from 'components/Toolbar';
import GlobalNav from 'components/GlobalNav';
import './style.scss';

//const { node} = PropTypes;

const App = (props) => (
  <main className="viewport">
    <GlobalNav />
    {props.children}
  </main>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
