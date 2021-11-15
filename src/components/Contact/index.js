import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import './Contact.css';

function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function Change(event) {
        if (event.target.name === 'email') {
            const valid = validateEmail(event.target.value);
            if(!valid) {
                setErrorMessage('Please double check and make sure your email is correct! :)');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({...formState, [event.target.name]: event.target.value });
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    }

    function submit(e) {
        e.preventDefault();
    }

    return (
        <section className="form-box">
            <h4>Contact Me</h4>
            <form onSubmit={submit} className="form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' name="name" defaultValue={name} onBlur={Change} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={Change} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="6" defaultValue={message} onBlur={Change} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit!</button>
            </form>
        </section>
    )
}

export default ContactForm;