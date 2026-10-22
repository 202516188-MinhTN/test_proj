import styles from "./mail.module.css";
import React, { useState } from 'react';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
// Tạo các Icon SVG thuần không dùng hook
const UserPlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
);
const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
);

//INITIAL_REQUESTS = await axios.get("/api/search/account", {});
function Mail() {
  const [requests, setRequests] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`/api/request/${name}`);;
        setRequests(response.data);
    }
    fetchData();
  }, [requests]);
  const handleAccept = async (friendName) => {
    console.log(friendName);
    const response = await axios.delete(`/api/request/${name}`, {
        data : {
          friendName
        }
    });
   // response = await axios.post(`/api/create/friends/${name}`)
    setRequests((prev) => prev.filter((item) => item.name !== friendName));
  }
  const handleDecline = (id) => setRequests((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.iconBox}>
            <UserPlusIcon />
          </div>
          <h2 className={styles.title}>Lời mời kết bạn</h2>
        </div>
        {requests.length > 0 && (
          <span className={styles.badge}>{requests.length}</span>
        )}
      </div>

      {/* Danh sách */}
      <div className={styles.list}>
        {requests.length > 0 ? (
          requests.map((item) => (
            <div key={item} className={styles.item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY1ipF17IyCq0t6JG7WTHfAE-KDxPKSmbHRmOugpBZ4kx1AC2m20WQ_m0&s=10" alt={item.name} className={styles.avatar} />
              <div className={styles.info}>
                <h4 className={styles.name}>{item}</h4>
                <div className={styles.subText}>
                  <span>{item.mutualFriends > 0 ? `${item.mutualFriends} bạn chung` : 'Không có bạn chung'}</span>
                  <span>•</span>
                  <ClockIcon />
                  <span>{item.time}</span>
                </div>
              </div>
              <div className={styles.actions}>
                <button onClick={() => handleAccept(item)} className={styles.btnAccept} title="Chấp nhận">
                  <CheckIcon />
                </button>
                <button onClick={() => handleDecline(item)} className={styles.btnDecline} title="Từ chối">
                  <XIcon />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.empty}>Không có lời mời kết bạn nào</div>
        )}
      </div>
    </div>
  );
}

export default Mail;