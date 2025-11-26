import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineHashtag } from "react-icons/hi";
import { BsLayoutSidebar, BsThreeDots } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";
import { LuInbox } from "react-icons/lu";
import ModalAddTask from '../modal/ModalAddTask';

const MenuComponent = () => {
    const location = useLocation(); 
    const [isOpenModalAddTask, setOpenModalAddTask] = useState(false);

    const handleOpenModal = () => setOpenModalAddTask(true);
    const handleCloseModal = () => setOpenModalAddTask(false);

    const account_info = {
        user_id: "user_123abc",
        name: "Huyen Tran",
        email: "huyen.tran@example.com",
        avatar_url: "https://i.pravatar.cc/150?img=47"
    };

    // Giả sử backend trả về data
    const projects = [
        { project_id: "inbox_id", title: "Inbox", is_default: true },
        { project_id: "getting_started_id", title: "Getting Started", is_default: true },
        { project_id: "proj_01a8f92e", title: "Daily Tasks", is_default: false },
        { project_id: "proj_02f1c47b", title: "Study Plan", is_default: false },
        { project_id: "proj_03d9e21c", title: "Work Projects", is_default: false },
    ];

    const inboxProject = projects.find(p => p.title.toLowerCase() === "inbox");
    const otherProjects = projects.filter(p => p.project_id !== inboxProject.project_id);

    return (
        <div className="menu-componet-wapper">
            {/* Account info */}
            <div className="menu-account">
                <div className="account-info">
                    <div className="account-avatar">
                        <img src={account_info.avatar_url} alt="Avatar" />
                    </div>
                    <div className="account-name">{account_info.name}</div>
                </div>
                <BsLayoutSidebar />
            </div>

            {/* Add task */}
            <div className="menu-add-task">
                <button className="add-task-btn" onClick={handleOpenModal}>
                    <RiAddLine /> Add task
                </button>
            </div>

            {/* Inbox cố định đầu */}
            <div className={`menu-inbox-item ${location.pathname === '/inbox' ? 'active' : ''}`}>
                <NavLink to="/inbox" className="inbox-link">
                    <div className="inbox-icon"><LuInbox /></div>
                    <div className="inbox-title">{inboxProject.title}</div>
                </NavLink>
            </div>

            {/* Các project còn lại */}
            <div className="menu-content">
                <div className="menu-projects">
                    <div className="menu-heading">
                        <div className="menu-heading-text">MY PROJECTS</div>
                        <div className="add-project-btn">
                            <RiAddLine />
                        </div>
                    </div>

                    <div className="project-list">
                        {otherProjects.map(p => {
                            const isActive = location.pathname.includes(p.project_id);
                            return (
                                <div
                                    key={p.project_id}
                                    className={`project-item ${isActive ? 'active' : ''}`}
                                >
                                    <NavLink
                                        to={`/${p.project_id}/${p.title}`}
                                        className="project-link"
                                    >
                                        <div className="project-icon">
                                            <HiOutlineHashtag />
                                        </div>
                                        <div className="project-title">{p.title}</div>
                                    </NavLink>
                                    <div className="project-action">
                                        <BsThreeDots />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal add task */}
            {isOpenModalAddTask && (
                <div className="modal-backdrop">
                    <ModalAddTask onClose={handleCloseModal} />
                </div>
            )}
        </div>
    );
};

export default MenuComponent;
