import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
    const [account, setAccount] = useState({});
    const { slug } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/profile/${slug}`);
            setAccount(response.data.account);
        }
        if(slug) fetchData();
    }, [])
    const avt = (account.avatar) ? account.avatar : "https://avatarhub.edu.vn/wp-content/uploads/2025/12/avatar-mac-dinh-cua-fb-4.jpg";

    return (
        
        <div>
            <img src={avt}/>
            <h1>{account.name}</h1>
        </div>
    )
}
export default Profile;