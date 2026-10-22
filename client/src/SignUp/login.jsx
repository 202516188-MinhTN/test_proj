import React, { useState } from 'react';
import styles from './login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleName = (value) => {
        setName(value);
    }
    const handlePassword = (value) => {
        setPassword(value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let account = {name, password};
        const response = await axios.post("/api/check/login", account);
        if(response.data.exist) {
            alert("Successfully!!!");
            navigate("/", {
                state: {
                    name,
                    slug: response.data.slug,
                }
            });
        }
        else {
            alert("Account does not exist. Try again!!!");
            setName('');
            setPassword('');
        }
        

        console("hello");
    }
    
    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.container}>
                <h2>Đăng Nhập</h2>
                <form>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input onChange={(e) => handleName(e.target.value)} value={name} type="text" id="username" placeholder="Nhập tên đăng nhập" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input onChange={(e) => handlePassword(e.target.value)} value={password} type="password" id="password" placeholder="Nhập mật khẩu" />
                    </div>


                    <button onClick={handleSubmit} type="submit" className={styles.btnRegister}>Đăng Nhập</button>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;
