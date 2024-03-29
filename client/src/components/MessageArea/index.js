import React, {useState} from 'react';
import styles from './MessageArea.module.css';
import {sendNewMessageAction} from '../../actions/actionCreators';
import {connect} from 'react-redux';
const MessageArea = (props) => {
    const [message, setMessage] = useState('');
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('send');
        if(message) {
            props.sendMessage({body: message, chatId: props.currentChat._id})
        }
    }  

    const changeHandler = ({target: {value}}) => {
        setMessage(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmitHandler}
                    className={styles.form}>
                <textarea 
                name="message" 
                value={message} 
                onChange={changeHandler}
                className={styles.text}/>
                <button className={styles['send-btn']}>&#10148;</button>
            </form>
        </div>
    );
}
const mapStateToProps = ({currentChat}) => ({currentChat})
const mapDispatchToProps = {
    sendMessage: sendNewMessageAction
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);