import React, { PropTypes } from 'react';
import './header.scss';

const { string } = PropTypes;

const Header = ({ title, className }) => {
  const styles = `header-container ${className}`;

  return (
    <header className={styles}>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  className: string.isRequired,
  title: string.isRequired
};

export default Header;
