import React, {useEffect, useState} from 'react';
import styles from './DialogList.module.css';
import {connect} from 'react-redux';
import {getUserChatsAction} from '../../actions/actionCreators';

const DialogList = (props) => {

    useEffect(() => {
        props.getUserChats();
    }, []);


    const mapList = (chat) => <li key={chat._id}>{chat.name}</li>

    const {chatList} = props;
    return (
        <div className={styles.dialog}>
            <ul>
            {chatList && chatList.map(mapList)}
            </ul>
        </div>
    );
}

const mapStateToProps = ({chatList, currentChat}) => ({chatList, currentChat})

const mapDispatchToProps = {
   getUserChats: getUserChatsAction 
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);