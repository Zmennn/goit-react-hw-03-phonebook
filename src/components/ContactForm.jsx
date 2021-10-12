import React, { Component } from 'react';
import PropTypes from "prop-types";
import style from './ContactsList.module.css';
import { v4 as uuidv4 } from 'uuid';


class ContactForm extends Component{

    state = {
    name: '',
    number: ''
    };

    inputNameId = uuidv4();
    inputNumberId=uuidv4();
    
     handleChangeAllInput = (ev) => {
       this.setState({
         [ev.target.name]: ev.target.value
       });     
  };

  
render() {
    const { inputNameId, handleChangeAllInput, state,inputNumberId } = this

    return (<>
      <form className={style.form} onSubmit={(e) => {
        e.preventDefault();
        this.props.handleSubmit(state);
         this.setState({
      name: '',
      number: ''
    })
      }}>
        <label className={style.label} htmlFor={inputNameId}>Name</label>
        <input
          className={style.input}
          id={inputNameId}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeAllInput}
            />
            
        <label className={style.label} htmlFor={inputNumberId}>Phone</label>
        <input
          className={style.input}
          id={inputNumberId}
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeAllInput}
        />

        <button className={style.button}
          type="submit"
        >Add contact</button>
      </form>


    </>)
  }
}

export default ContactForm

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}