import { useParams } from 'react-router-dom'

const ProjectPage = () => {
    const { project_id, project_title } = useParams()

    return (
        <div className="project-page">
            <h1>{project_title}</h1>
            <p>Project ID: {project_id}</p>
        </div>
    )
}

export default ProjectPage
