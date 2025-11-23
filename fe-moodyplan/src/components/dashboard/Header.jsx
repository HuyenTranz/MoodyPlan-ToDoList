import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom"; // Thêm useLocation, Link

const Header = () => {
    const { project_title } = useParams();
    const [isSticky, setIsSticky] = useState(false);

    // Logic xác định Title dựa trên URL
    const isProjectPage = Boolean(project_title); // True nếu có project_title, False nếu là Inbox
    const displayTitle = project_title ? decodeURIComponent(project_title) : "Inbox";

    useEffect(() => {
        const handleScroll = (event) => {
            const scrollTop = event.target.scrollTop;
            setIsSticky(scrollTop > 60);
        };

        const timer = setTimeout(() => {
            const scrollContainer = document.querySelector('.main-content');
            if (scrollContainer) {
                scrollContainer.addEventListener("scroll", handleScroll);
            } else {
                window.addEventListener("scroll", () => {
                    setIsSticky(window.scrollY > 60);
                });
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            const scrollContainer = document.querySelector('.main-content');
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("scroll", handleScroll);
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
                    "Inbox"
                )}
            </div>
        </header>
    );
};

export default Header;