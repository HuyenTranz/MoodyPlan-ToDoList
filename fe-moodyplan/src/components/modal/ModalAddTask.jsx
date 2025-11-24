import React, { useState } from 'react';
// import DateSelectorDay from '../DateSelector/DateSelectorDay'; // Bỏ comment nếu muốn dùng
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCalendarAlt, FaFlag, FaBell, FaEllipsisH } from "react-icons/fa"; // Thêm các icon mới
import { MdKeyboardVoice } from "react-icons/md"; // Icon dictate
import { LuInbox } from 'react-icons/lu';

// Giả định bạn có một component cho dropdown chọn project/section
// import ProjectSectionDropdown from './ProjectSectionDropdown'; 

const ModalAddTask = ({ onClose }) => {
    // States cho các trường input
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    // States cho dropdown Project/Section (ví dụ)
    const [selectedProject, setSelectedProject] = useState({ name: 'Inbox', sections: ['General'] });
    const [selectedSection, setSelectedSection] = useState('General');

    // Hàm để ngăn chặn sự kiện click lan truyền ra backdrop
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const handleAddTask = () => {
        if (taskName.trim()) {
            onClose();
        }
    };

    return (
        <div className="add-task-modal-wrapper" onClick={handleContentClick}>
            <div className="add-task-card">
                {/* Phần nhập tên Task và nút Dictate */}
                <div className="form-group task-name-group">
                    <input
                        id="taskName"
                        type="text"
                        placeholder="Task name"
                        className="input task-name-input"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        required
                    />
                </div>

                {/* Phần nhập mô tả */}
                <div className="form-group description-group">
                    {/* <label htmlFor="description" className="label">Description</label> */}
                    <input
                        id="description"
                        type="text"
                        placeholder="Description"
                        className="input description-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Các tùy chọn Task: Date, Priority, Reminders, More */}
                <div className="task-options-row">
                    <button className="option-button">
                        <FaCalendarAlt /> Date
                    </button>
                    <button className="option-button">
                        <FaFlag /> Priority
                    </button>
                </div>

                {/* Footer của Modal: Dropdown chọn project/section, Cancel, Add task */}
                <div className="task-footer">
                    <div className="task-dropdown-container">
                        <button className="project-dropdown-toggle">
                            <LuInbox /> Inbox <IoMdArrowDropdown/>
                        </button>
                    </div>

                    {/* Nút Cancel và Add task */}
                    <div className="action-buttons">
                        <button className="cancel-button" onClick={onClose}>Cancel</button>
                        <button
                            className="add-task-button"
                            onClick={handleAddTask}
                            disabled={!taskName.trim()} // Vô hiệu hóa nút nếu tên task trống
                        >
                            Add task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddTask;