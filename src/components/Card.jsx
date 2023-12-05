function Card(project) {

    return (
        <div className="card text-center">

            <img className="card-img-top" src={`../../assets/images/${project.imageName}`} alt={`${project.imageAlt}`}/>

            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
            </div>

            <div className="card-body">
                <a target="#" href={`${project.projectLink}`}>Project Page</a>
            </div>

        </div>
    );
}

export default Card;