import { useParams } from 'react-router-dom'
import Header from '../../components/dashboard/Header'

const ProjectPage = () => {
    const { project_id, title } = useParams()

    return (
        <div className="project-page">
            <Header />

            <div className="project-content" style={{
                backgroundColor: '#f4f4f4',
                borderRadius: '8px',
                padding: '20px',
                height: "200vh"
            }}>
                <p>This is the project page for project:</p>
            </div>
            <h1>{title}</h1>
            <p>Project ID: {project_id}</p>
        </div>
    )
}

export default ProjectPage
