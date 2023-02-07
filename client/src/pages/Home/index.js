import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

const Home = (props) => {
    const [view, setView] = useState(true);
    const navigate = useNavigate();

    const sendApiRequest = (responce) => {
        responce.then(({data: {data}}) => {
            console.log(data);
            props.sendData(data);
            navigate('/messenger');
        });
    }

    const buttonText = view ? "SignUp" : "SignIn";

    const clickHandler = () => {setView(!view)};

    return (
        <div className={styles.cover}>
            <button onClick={clickHandler}>{buttonText}</button>
            <section className={styles['form-wrapper']} >
            {view ? <SignIn apiRequest={sendApiRequest} /> : <SignUp 
                        apiRequest={sendApiRequest} />}
            </section>
        </div>
    );
}
export default Home;