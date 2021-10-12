import React, { Component } from 'react';
import style from './ContactsList.module.css';
import PropTypes from "prop-types";

class ContactsList extends Component{

    render() {
        return (
            <ul className={style.list}>        
                {
                    this.props.contacts.map(el => (<li
                        className={style.listItem}
                        key={el.id} >
                        {el.name}:  {el.number}
                        <button
                            type="button"
                            className={style.deleteButton}
                            id={el.id}
                            onClick={this.props.handleDelete}
                        >Delete</button>
                      </li>))
                }
        </ul>
    )}

}


export default ContactsList

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}