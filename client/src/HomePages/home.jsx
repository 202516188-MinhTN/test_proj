import Mail from './mail'; 
import styles from './home.module.css';
import clsx from "clsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {Routes, Route, Link, useLocation} from "react-router-dom"
import { use, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { growthbook } from '../growthbook';
import { GrowthBook } from '@growthbook/growthbook';
function Home() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state?.name;
    const slug = location.state?.slug;
    const [find, setFind] = useState('');
    const handleLogout = () => {
        navigate("/", {
            state : {
                name: undefined,
                slug: undefined,
            }
        })
    }
    const handleFindFriends = (e) => {
        if(e.key === 'Enter') {
            if(!name) {
                alert("Please Login to continue!!!");
                setFind('');
                return;
            }
            navigate('/search/account', {
                state: {
                    name,
                    find
                }
            })
        }
        
    }
    const [isVNPayActive, setIsVNPayActive] = useState(growthbook.isOn('new-vnpay-feature'));
    
    useEffect(() => {
        // 2. Khi GrowthBook tải dữ liệu từ CDN về xong, cập nhật lại state
        growthbook.init({ streaming: true }).then(() => {
            setIsVNPayActive(growthbook.isOn('new-vnpay-feature'));
        });

        const unsubscribe = growthbook.subscribe(() => {
            setIsVNPayActive(growthbook.isOn('new-vnpay-feature'));
        });

    return () => unsubscribe(); // Dọn dẹp listener khi unmount
    }, []);
    const [btnConfig, setBtnConfig] = useState("red");

  useEffect(() => {
    // Hàm lấy giá trị config mới nhất và đẩy vào State
    const updateConfig = () => {
      const config = growthbook.getFeatureValue('btn-color', "red");
      setBtnConfig(config);
    };

    // 2. Tải dữ liệu từ CDN về xong -> Cập nhật State ngay
    growthbook.init({ streaming: true }).then(() => {
      updateConfig();
    });

    // 3. Lắng nghe thay đổi real-time từ GrowthBook -> Cập nhật State
    const unsubscribe = growthbook.subscribe(() => {
      updateConfig();
    });

    return () => unsubscribe();
  }, []);
    return (
        <div className={clsx(styles.navbar, styles.dflex)}>
            <div className={clsx(styles.navL, styles.dflex, styles.algcenter)}>
                <FontAwesomeIcon icon={faHouse} className={clsx(styles.logo)}/>
                <Link to = {`/mail/${name}`}><button type="button" className={clsx(styles.btn)}> <FontAwesomeIcon icon={faEnvelope} className={clsx(styles.logo, styles.marginleft)}/> </button></Link>
                <input onKeyDown={handleFindFriends} onChange={(e) => setFind(e.target.value)} value={find} type="text" className={clsx(styles.search)} placeholder='Search Friends...'/>
            </div>
            <div className={clsx(styles.navR, styles.dflex, styles.algcenter, styles.reverse)}>
                
                {!name && <Link to = "/register" className={clsx(styles.login)}>Register</Link>}
                {!name && <Link to = "/login" className={clsx(styles.login)}>Log in</Link>}
                
                {name && <Link to = "/" onClick={handleLogout} className={clsx(styles.login)}>Log out</Link>}
                {name && <p>Welcome, <Link to = {`profile/${slug}`}> <strong>{name}</strong> </Link> </p>}
                {name && <Link to = {`/create/product/${slug}`}>Create a product</Link>}
                {isVNPayActive ? <p>Giao diện VNPay mới (TRUE)</p> : <p>Giao diện Momo cũ (FALSE)</p>}
                <button style={{backgroundColor: btnConfig}}>hello</button>
            </div>
            
        </div>
        
    )
}
export default Home;