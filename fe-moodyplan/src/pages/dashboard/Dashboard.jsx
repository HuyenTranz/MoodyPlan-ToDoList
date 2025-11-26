import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'; // Import useLocation
import Header from '../../components/dashboard/Header';
import todoEmptyImage from '../../assets/todo-empty.png';
import ModalAddTask from '../../components/modal/ModalAddTask';
import ModalAddSection from '../../components/modal/ModalAddSection';

const Dashboard = () => {
    const location = useLocation();
    const [empty, setEmpty] = useState(true);
    const [isOpenModalAddTask, setOpenModalAddTask] = useState(false);
    const [isOpenModalSection, setOpenModalSection] = useState(false);

    // Lấy tiêu đề động từ URL
    let displayTitle = "Inbox";
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length >= 2) {
        displayTitle = decodeURIComponent(pathParts[1]);
    }

    const handleOpenModalAddTask = () => {
        setOpenModalAddTask(true);
        setEmpty(false);
    }

    const handleCloseModalAddTask = () => {
        setOpenModalAddTask(false);
        setEmpty(true);
    };

    const handleOpenModalSection = () => {
        setOpenModalSection(true);
        setEmpty(false);
    }

    const handleCloseModalSection = () => {
        setOpenModalSection(false);
    };


    return (
        <div className="dashboard-wapper">
            <Header />

            <div className="dashboard-content">
                {/* Hiển thị tiêu đề động */}
                <div className="big-page-title">{displayTitle}</div>

                {isOpenModalAddTask && (
                    <div className="modal-backdrop-inbox">
                        <ModalAddTask onClose={handleCloseModalAddTask} />
                    </div>
                )}

                {empty ? (
                    <div className="empty-state">
                        {/* ... Giữ nguyên phần nội dung empty state ... */}
                        <div className="image-wrapper">
                            <img src={todoEmptyImage} alt="Empty State" className="empty-image" />
                        </div>
                        <h3 className="title">Capture now, plan later</h3>
                        <p className="subtitle">Inbox is your go-to spot for quick task entry.
                            Clear your mind now, organize when you’re ready.</p>
                        <button
                            className="create-list-button"
                            onClick={handleOpenModalAddTask}
                        >
                            Add Task
                        </button>
                    </div>
                ) : (
                    <div className="task-lists">
                        {/* Chỉ hiện Add section khi modal chưa mở */}
                        {!isOpenModalSection && (
                            <div className="divider-wrapper">
                                <span className="line"></span>
                                <button className="btn-text" onClick={handleOpenModalSection}>
                                    Add section
                                </button>
                                <span className="line"></span>
                            </div>
                        )}

                        {/* Modal Section */}
                        {isOpenModalSection && (
                            <div className="modal-backdrop-inbox">
                                <ModalAddSection onClose={handleCloseModalSection} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;