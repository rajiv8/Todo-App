import React from 'react'
import PropTypes from 'prop-types'

import {
    Link
  } from "react-router-dom";
  
export default function Header(props) {
    
    return (
        <nav className="navbar navbar-nav navbar-expand navbar-light bg-light">
            <div className="navbar">
            <Link className="navbar-brand" to="/">{props.heading}</Link>
                
            <Link className="navbar-brand" to="/">Home</Link>
                    
            {props.searchbar? <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>: ""}
            </div>
                   
             
        </nav>
    )
}

Header.defaultProps = {
    heading: "Todos-List",
    searchbar: false
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    searchbar: PropTypes.bool
}
