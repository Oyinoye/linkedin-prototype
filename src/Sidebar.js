import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://scontent.flos1-1.fna.fbcdn.net/v/t31.0-8/15676413_10154015871082751_7320616018608310379_o.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeGeKEHmM45DULjPFRItVjm5d5xZE8edhJ93nFkTx52En-nkZq-LVgw1ufMGg3oGaWo&_nc_ohc=79WwDwX_QaAAX_va8W-&_nc_ht=scontent.flos1-1.fna&oh=6be077cdc2397eb1572b30a242b626e3&oe=603DCF9B" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">300</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">299</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("programming")}
                {recentItem('React.js')}
                {recentItem('Electron')}
                {recentItem('React Native')}
                {recentItem('Node.js')}
                {recentItem('Software engineering')}
            </div>
        </div>
    )
}

export default Sidebar
