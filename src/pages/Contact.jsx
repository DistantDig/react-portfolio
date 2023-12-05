import { useState } from 'react';

export default function Contact() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validMessage, setValidMessage] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'userName':
                if (value == '') {
                    setValidName(false);
                } else {
                    setValidName(true)
                }
                return setUserName(value);

            case 'userEmail':
                if (!validateEmail(value)) {
                    setValidEmail(false);
                } else {
                    setValidEmail(true)
                }
                return setUserEmail(value);

            default:
                if (value == '') {
                    setValidMessage(false);
                } else {
                    setValidMessage(true)
                }
                return setUserMessage(value);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setUserName('');
        setUserEmail('');
        setUserMessage('');
    }

    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    return (
      <div className='constainer'>
        <h2>Contact Me!</h2>

        <form className='form' onSubmit={handleFormSubmit}>
            <div className='mb-3'>
                <label htmlFor='userName' className='form-label'>Name:</label>
                <input
                    value= {userName}
                    name= 'userName'
                    onChange= {handleInputChange}
                    type='text'
                    placeholder='Name'
                    className={validName ? 'form-control' : 'form-control is-invalid'}
                />
                <div className="invalid-feedback" style={{display: validName ? 'none' : 'inline'}}>
                    Please choose a username.
                </div>
            </div>

            <div className='mb-3'>
                <label htmlFor='userEmail' className='form-label'>Email Address:</label>
                <input
                    value= {userEmail}
                    name= 'userEmail'
                    onChange= {handleInputChange}
                    type='email'
                    placeholder='example@example.com'
                    className={validEmail ? 'form-control' : 'form-control is-invalid'}
                />
                <div className="invalid-feedback" style={{display: validEmail ? 'none' : 'inline'}}>
                    Please choose a valid email.
                </div>
            </div>

            <div className='mb-3'>
                <label htmlFor='userMessage' className='form-label'>Message:</label>
                <textarea
                    value= {userMessage}
                    name= 'userMessage'
                    onChange= {handleInputChange}
                    placeholder='Leave me a message!'
                    className={validMessage ? 'form-control' : 'form-control is-invalid'}
                    style= {{height: '200px'}}
                />
                <div className="invalid-feedback" style={{display: validMessage ? 'none' : 'inline'}}>
                    Please do not leave empty.
                </div>
            </div>
        </form>
      </div>
    );
}