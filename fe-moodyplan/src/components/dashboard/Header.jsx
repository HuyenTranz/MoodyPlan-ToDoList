import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom"; // Thêm useLocation, Link

const Header = () => {
    const { project_id, project_title } = useParams();
    const [isSticky, setIsSticky] = useState(false);


    const isProjectPage = Boolean(project_id && project_title);
    const displayTitle = isProjectPage ? decodeURIComponent(project_title) : "Inbox";


    useEffect(() => {
        const scrollContainer = document.querySelector('.main-content');

        const handleScroll = (e) => {
            if (scrollContainer) {
                setIsSticky(scrollContainer.scrollTop > 60);
            } else {
                setIsSticky(window.scrollY > 60);
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        } else {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);


    return (
        <header className={`main-header ${isSticky ? "sticky" : ""}`}>
            <div className={`title-header ${isSticky ? "visible" : ""}`}>
                {/* Nếu là Project Page thì hiện breadcrumb "My Projects /" */}
                {isProjectPage ? (
                    <div className="breadcrumb-title">
                        <span className="prefix">My Projects / </span>
                        <span className="current-name">{displayTitle}</span>
                    </div>
                ) : (
                    displayTitle
                )}
            </div>
        </header>
    );
};

export default Header;