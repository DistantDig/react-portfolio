import Card from "../components/Card";

export default function Projects() {

    const projects = {
        immersiveJungles: {
            title: "Immersive Jungles Mod",
            description: "Minecraft mod coded in Java. I made this one working with a friend who goes by Kekie6 online. Our newest project.",
            imageName: "immersive_jungels_logo.png",
            imageAlt: "Immersive Jungles Logo",
            demo: "https://www.curseforge.com/minecraft/mc-mods/immersive-jungles",
            github: "#"
        },
        readZen: {
            title: "ReadZen",
            description: "Website application for generating and sharing READMEs for project developers.",
            imageName: "readzen_logo.png",
            imageAlt: "ReadZen Logo",
            demo: "https://read-zen.onrender.com",
            github: "https://github.com/Migsrkrd/ReadZen"
        },
        gymFlow: {
            title: "Gym Flow",
            description: "Website application of a workout-themed social media app for creating and sharing workout routines.",
            imageName: "gym_flow_logo.png",
            imageAlt: "Gym Flow Logo",
            demo: "https://sheltered-inlet-69891-1c93b8a30eb8.herokuapp.com/",
            github: "https://github.com/d-a-v-i-d-w-r-i-g-h-t/gym-flow"
        },
        dndOrigins: {
            title: "Dig's DnD Origins Mod",
            description: "Minecraft mod coded in Java. I made this one on my own and is my most popular project currently.",
            imageName: "digs_dnd_origins_logo.png",
            imageAlt: "DnD Origins Logo",
            demo: "https://www.curseforge.com/minecraft/mc-mods/digs-dnd-origins",
            github: "https://github.com/DistantDig/digs-dnd-origins"
        },
        treeLib: {
            title: "TreeLib Mod",
            description: "Minecraft mod coded in Java. This is another project coded with Kekie6, and is designed to be a library for future mod projects.",
            imageName: "tree_lib_logo.png",
            imageAlt: "TreeLib Logo",
            demo: "https://www.curseforge.com/minecraft/mc-mods/tree-lib",
            github: "#"
        }
        // contentAId: {
        //     title: "Content AId",
        //     description: "Website application designed to search and evaluate articles on the likelihood of being written by AI.",
        //     imageName: "AId_logo.png",
        //     imageAlt: "AId Logo",
        //     github: "https://github.com/stellyes/content-AId"
        // }
    }

    return (
      <div style={{fontSize:'1.25em'}}>
        <h2 className='display-3 text-center'>My Work!</h2>

        <div className="row row-cols-1 row-cols-md-1 my-auto px-5">
            <div className="col col-sm-6 mb-3 mb-sm-0">

                <Card {...projects.immersiveJungles}/>

            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 my-auto px-5">

            <div className="col col-sm-6 mb-3 mb-sm-0">
                <Card {...projects.readZen}/>
            </div>

            <div className="col col-sm-6 mb-3 mb-sm-0">
                <Card {...projects.gymFlow}/>
            </div>

            <div className="col col-sm-6 mb-3 mb-sm-0">
                <Card {...projects.dndOrigins}/>
            </div>

            <div className="col col-sm-6 mb-3 mb-sm-0">
                <Card {...projects.treeLib}/>
            </div>

            {/* <div className="col col-sm-6 mb-3 mb-sm-0">

                <Card {...projects.contentAId}/>

            </div> */}
        </div>
      </div>
    );
}