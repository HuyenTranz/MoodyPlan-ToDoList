import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiOutlineHashtag } from "react-icons/hi";
import { BsLayoutSidebar, BsThreeDots } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";
import { LuInbox } from "react-icons/lu";
import ModalAddTask from '../modalAddTask/ModalAddTask';

const MenuComponent = () => {
    const location = useLocation(); // dùng để check active
    const [empty, setEmpty] = useState(true);
    const [isOpenModalAddTask, setOpenModalAddTask] = useState(false);

    const handleOpenModal = () => setOpenModalAddTask(true);
    const handleCloseModal = () => setOpenModalAddTask(false);

    const account_info = {
        user_id: "user_123abc",
        name: "Huyen Tran",
        email: "huyen.tran@example.com",
        avatar_url: "https://i.pravatar.cc/150?img=47"
    }

    const projects = [
        { project_id: "proj_01a8f92e", title: "Daily Tasks" },
        { project_id: "proj_02f1c47b", title: "Study Plan" },
        { project_id: "proj_03d9e21c", title: "Work Projects" },
        { project_id: "proj_04b73f90", title: "Personal Notes" }
    ];

    return (
        <div className="menu-componet-wapper">
            <div className="menu-account">
                <div className="account-info">
                    <div className="account-avatar">
                        <img src={account_info.avatar_url} alt="Avatar" />
                    </div>
                    <div className="account-name">{account_info.name}</div>
                </div>
                <BsLayoutSidebar />
            </div>

            <div className="menu-add-task">
                <button className="add-task-btn" onClick={handleOpenModal}>
                    <RiAddLine /> Add task
                </button>
            </div>

            <div className={`menu-inbox-item ${location.pathname === '/' ? 'active' : ''}`}>
                <NavLink to="/" className="inbox-link">
                    <div className="inbox-icon"><LuInbox /></div>
                    <div className="inbox-title">Inbox</div>
                </NavLink>
            </div>

            <div className="menu-content">
                <div className="menu-projects">
                    <div className="menu-heading">
                        <div className="menu-heading-text">MY PROJECTS</div>
                        <div className="add-project-btn">
                            <RiAddLine />
                        </div>
                    </div>

                    <div className="project-list">
                        {projects.map(p => {
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
                                        <div className="project-icon"><HiOutlineHashtag /></div>
                                        <div className="project-title">{p.title}</div>
                                    </NavLink>
                                    <div className="project-action">
                                        <BsThreeDots />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {isOpenModalAddTask && (
                <div className="modal-backdrop">
                    <ModalAddTask
                        onClose={handleCloseModal}
                    />
                </div>
            )}
        </div>
    )
}

export default MenuComponent;
