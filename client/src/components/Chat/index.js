import React from 'react';
import styles from './Chat.module.css';
import { connect } from 'react-redux';
import cx from 'classnames';

const Chat = (props) => {
   const {currentChat, user} = props;

   const messageMap = msg => {
    const cn = cx(styles.message, {
        [styles['user-message']]: msg.author === user._id
    })
    return <li key={msg._id} className={cn}>{msg.body}</li>
   }

    return (
        <div className={styles.chat}>
            <ul>
            {currentChat && currentChat.messages.map(messageMap)}
            </ul>
        </div>
    );
}

const mapStateToProps = ({user, currentChat}) => ({user,currentChat});


export default connect(mapStateToProps)(Chat);