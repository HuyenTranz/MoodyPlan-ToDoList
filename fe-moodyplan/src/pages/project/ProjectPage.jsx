import { useParams } from 'react-router-dom'
import Header from '../../components/dashboard/Header'
import { useState } from 'react';
import ModalAddSection from '../../components/modal/ModalAddSection';
import { RiAddLine } from "react-icons/ri";
import ModalAddTask from '../../components/modal/ModalAddTask';

const ProjectPage = () => {
    const { project_id, project_title } = useParams();
    const [empty, setEmpty] = useState(true);
    const [isOpenModalAddTask, setOpenModalAddTask] = useState(false);
    const [isOpenModalSection, setOpenModalSection] = useState(false);


    const handleOpenModal = () => setOpenModalAddTask(true);
    const handleCloseModal = () => setOpenModalAddTask(false);

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
        // setEmpty(true);
    };
    return (
        <div className="project-page-wapper">
            <Header />

            <div className="project-content" >
                {/* Hiển thị tiêu đề động */}
                <div className="big-page-title">{project_title}</div>

                {/* Add task */}
                <div className="task-lists">
                    <div className="add-task">
                        <button className="add-task-btn" onClick={handleOpenModal}>
                            <RiAddLine /> Add task
                        </button>
                    </div>
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
            </div>
            {/* Modal add task */}
            {isOpenModalAddTask && (
                <div className="modal-backdrop">
                    <ModalAddTask onClose={handleCloseModal} />
                </div>
            )}
        </div>
    )
}

export default ProjectPage
