//Home page
import fishing from "./pagePhotos/fishingSection.jpg"
import gardening from "./pagePhotos/gardeningSection.png"
import kitchen from "./pagePhotos/kitchenDiningSection.png"
import tools from "./pagePhotos/toolsSection.png"

//Will contain shopping information such as all the categories to shop in a column form
const Home = () => {
    return (
        <div className="home">
            <h1 className="homeHeader">What Are You Looking For?</h1>

            {/* Display clickable cards with image and title for each section of items */}
                <div className="homeCard">
                    <a className="clickableCard" href="/fishing">
                        {/* Insert item title */}
                        <h1 className="homeCardHeader">Fishing</h1>
                        <img className="homeCardImg" src={fishing}/>
                    </a>
                </div>
                <div className="homeCard">
                    {/* Insert item title */}
                    <a className="clickableCard" href="tools">
                        <h1 className="homeCardHeader">Tools</h1>
                        <img className="homeCardImg" src={tools}/>
                    </a>
                </div>
                <div className="homeCard">
                    <a className="clickableCard" href="/gardening">
                    {/* Insert item title */}
                        <h1 className="homeCardHeader">Gardening</h1>
                        <img className="homeCardImg" src={gardening}/>
                    </a>
                </div>
                <div className="homeCard">
                    <a className="clickableCard" href="/kitchen">       
                        {/* Insert item title */}
                        <h1 className="homeCardHeader">Kitchen & Dining</h1>
                        <img className="homeCardImg" src={kitchen}/>
                    </a>    
                </div>
        </div>
    )
}

export default Home