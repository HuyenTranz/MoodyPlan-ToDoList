import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Header from '../../components/dashboard/Header';
import todoEmptyImage from '../../assets/todo-empty.png';

const Dashboard = () => {
    const [empty, setEmpty] = useState(true);
    const location = useLocation();

    // Lấy tiêu đề động từ URL
    let displayTitle = "Inbox";
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length >= 2) {
        displayTitle = decodeURIComponent(pathParts[1]);
    }

    return (
        <div className="dashboard-wapper">
            <Header />

            <div className="dashboard-content">
                {/* Hiển thị tiêu đề động */}
                <div className="big-page-title">{displayTitle}</div>

                {empty ? (
                    <div className="empty-state">
                        {/* ... Giữ nguyên phần nội dung empty state ... */}
                        <div className="image-wrapper">
                            <img src={todoEmptyImage} alt="Empty State" className="empty-image" />
                        </div>
                        <h3 className="title">Capture now, plan later</h3>
                        <p className="subtitle">Inbox is your go-to spot for quick task entry.
                            Clear your mind now, organize when you’re ready.</p>
                        <button className="create-list-button" onClick={() => setEmpty(false)}>
                            Add Task
                        </button>
                    </div>
                ) : (
                    <div className="task-lists">
                        <h3>Tasks for: {displayTitle}</h3>
                        <p>Content goes here...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;