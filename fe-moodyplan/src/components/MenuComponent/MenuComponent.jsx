import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiOutlineHashtag } from "react-icons/hi";
import { BsLayoutSidebar, BsThreeDots } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";
import { LuInbox } from "react-icons/lu";

const MenuComponent = () => {
    const location = useLocation(); // dùng để check active

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

            <div className="menu-content">
                <div className="add-task-btn">
                    <RiAddLine /> Add task
                </div>

                <div className={`getting-started ${location.pathname === "/" ? "active" : ""}`}>
                    <NavLink to="/" className="getting-started-link">
                        <div className="getting-started-icon"><LuInbox /></div>
                        <div className="getting-started-title">Getting Started</div>
                    </NavLink>
                </div>

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
        </div>
    )
}

export default MenuComponent;
