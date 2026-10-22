import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Account() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state?.name;
    const find = location.state?.find;
    const [info, setInfo] = useState({});
    async function handleAdd() {
        console.log(name);
        const response = await axios.post("/api/request", { name, find });
        console.log("hello");
        console.log(response.data);
        alert("Add successfully!!!");
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/search/account", {
                params: {find}
            });
            setInfo(response.data);
        }
        fetchData();
    }, []) 

    return (
        <div>
            {!info.name && <p>Not found</p>}
            {info.name && 
            <div>
                <h1>{info.name}</h1>
                <h1>{info.email}</h1>
                <button onClick={handleAdd}>+</button>
            </div> 
            }
        </div>
    )
}
export default Account;