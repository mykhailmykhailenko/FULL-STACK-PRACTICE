import React, {useEffect, useState} from 'react';
import styles from './DialogList.module.css';
import {connect} from 'react-redux';
import {getUserChatsAction, getChatWithMessagesAction} from '../../actions/actionCreators';
import cx from 'classnames';

const DialogList = (props) => {
    const {currentChat, chatList} = props;

    useEffect(() => {
        props.getUserChats();
    }, []);

   const changeCurrentChat = (userChoice) => {
        if (userChoice !== currentChat?._id) {
            console.log('user change chat');
            props.getCurrentChat(userChoice);
        }
    }


    const mapList = (chat) => {
    const cn = cx(styles.dialog, {
        [styles.active]: chat._id === currentChat?._id
    })
    return <li key={chat._id} 
            className={cn}
            onClick={() => {changeCurrentChat(chat._id)}}>{chat.name}</li>
    }

    return (
        <div className={styles['dialog-list']}>
            <ul>
            {chatList && chatList.map(mapList)}
            </ul>
        </div>
    );
}
const mapStateToProps = ({chatList, currentChat}) => ({chatList, currentChat})

const mapDispatchToProps = {
   getUserChats: getUserChatsAction,
   getCurrentChat: getChatWithMessagesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);