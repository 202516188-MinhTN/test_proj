import React, { useState } from 'react';
import styles from './products.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const Products = () => {
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { slug } = useParams();
    const ownerSlug = slug;
    const handleName = (value) => {
        setName(value);
    }
    const handleImg = (value) => {
        setImg(value);
    }
    const handlePrice = (value) => {
        setPrice(value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const respone = axios.post("/api/create/product", {
            name,
            img,
            price,
            ownerSlug,
        })
        setName(''), setImg(''), setPrice('');
    }
    
    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.container}>
                <h2>Creat a Product</h2>
                <form>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Tên sản phẩm</label>
                        <input onChange={(e) => handleName(e.target.value)} value={name} type="text" id="username" placeholder="Nhập tên đăng nhập" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="img">Hình ảnh</label>
                        <input onChange={(e) => handleImg(e.target.value)} value={img} type="img" id="img" placeholder="Nhập địa chỉ hình ảnh" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="price">Giá</label>
                        <input onChange={(e) => handlePrice(e.target.value)} value={price} type="price" id="price" placeholder="Nhập giá sản phẩm" />
                    </div>

                    <button onClick={handleSubmit} type="submit" className={styles.btnRegister}>Tạo mới</button>
                    
                </form>
            </div>
        </div>
    );
};

export default Products;