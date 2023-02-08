import React, {useEffect, useState} from 'react';
import styles from './DialogList.module.css';
import {getUserChats} from '../../api/index';

const DialogList = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        getUserChats()
        .then(({data: {data}}) => {
            setList(data);
        });
    }, []);

    const mapList = (chat) => <li>{chat.name}</li>

    return (
        <div className={styles.dialog}>
            <ul>
            {list && list.map(mapList)}
            </ul>
        </div>
    );
}
export default DialogList;