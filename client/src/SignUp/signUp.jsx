import React, { useRef, useState } from 'react';
import styles from './signUp.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleExist = () => {
        setName(''), setEmail(''), setPassword(''), setConfirmPassword('');
        alert("Account existed. Please try again!!!")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let account = {name, password, email};
        try {
            const check = await axios.post('/api/check', account);
            if(!check.data.exist) {
                const response = await axios.post('/api/create/account', account);
                alert("Successfully register!!!");
                navigate("/");
            }
            else handleExist();
            
        } catch(error) {
            console.log('error');
        }
    }
    console.log(name, password, email, confirmPassword);
    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.container}>
                <h2>Đăng Ký</h2>
                <form>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input onChange={(e) => handleName(e)} value={name} type="text" id="username" placeholder="Nhập tên đăng nhập" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => handleEmail(e)} value={email} type="email" id="email" placeholder="Nhập email của bạn" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Mật khẩu</label>
                        <input onChange={(e) => handlePassword(e)} value={password} type="password" id="password" placeholder="Nhập mật khẩu" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                        <input onChange={(e) => handleConfirmPassword(e)} value={confirmPassword} type="password" id="confirmPassword" placeholder="Nhập lại mật khẩu" />
                    </div>

                    <button onClick={handleSubmit} type="submit" className={styles.btnRegister}>Đăng Ký</button>

                    <div className={styles.loginLink}>
                        Bạn đã có tài khoản? <a href="#login">Đăng nhập ngay</a>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default SignUp;