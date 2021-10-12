import style from './ContactsList.module.css';
import React, { Component } from 'react';
import PropTypes from "prop-types";


class Filter extends Component{
    


    render() {

const{props}=this

        return (<>
            <label htmlFor="find">Find contacts by name</label>
            <input
                className={style.input}
                autoComplete="off"
                id="find"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]"
                onChange={(ev) => { ev.preventDefault(); props.handleChangeFindInput(ev) }}
                ></input>
     </>   )
    }
}

export default Filter;

Filter.propTypes = {
    handleChangeFindInput: PropTypes.func.isRequired
}