//Shopping page with items
//This should be loaded with the correct items when either searching for specific items or clicking on a category -> MAY NEED > 1
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
//import itemDetails from "../components/itemDetails"
//import { useItemsContext } from "../hooks/useItemsContext"

//Will contain shopping information such as all the categories to shop in a column form
const Shop = () => {
    //Invoke our useItemsContext hook and destructure the items(null to begin with but once we fetch the items we update that using the dispatch function) and dispatch
   // const {items, dispatch} = useItemsContext()
    const [items, setItems] = useState(null)
    const location = useLocation() //Get the current route location so we known which items we want to get 

    //Get data for the items using the useEffect hook TO FETCH DATA
    useEffect(() => {

        //Fetch the workouts from the backend api
        const fetchItems = async () => {
            //Need to create a variable that represents which card item type we clicked on to concadinate it to the fetch below
            const itemPage = location.pathname
            
            //Need to use the port of our backend server
            const response = await fetch('/api/items' + itemPage, {
                
            }) //GET THE ITEM TYPE TO PUT INTO THE ROUTE TO GET THEM
        
            const json = await response.json() //Makes response json so we can use it

            //If there's no errors perform whats in here
            if (response.ok) {
                setItems(json) //Then dispatch if we have a valid response passing the set workouts and setting the payload to json as that's the workout data
            }
        }

        //Fetch the items even if we don't have a user logged in
        fetchItems()

    }, []) //Use dependency array to cause this to only fire once

        //Function for being able to tell what the name of the header should be according to the path
        const findPage = () => {
            //Call for the route we're in
            //Need to create a variable that represents which card item type we clicked on to concadinate it to the fetch below
            const itemPage = location.pathname

            //If page is fishing return fishing
            if (itemPage == "/fishing") {
                return "Fishing Items"
            }
            //If page is gardening return gardening
            else if(itemPage == "/gardening") {
                return "Gardening Items"
            }
            //If page is tools return tools
            else if(itemPage == "/tools") {
                return "Tool Items"
            }
            //If page is kitchen return kitchen and dinging
            else if(itemPage == "/kitchen") {
                return "Kitchen and Dining Items"
            }

            //Else return error
            return "Invalid"
        }

    return (
        <div className="home">
                {/* CREATE CARDS OF ITEM INFORMATION */}
                <h1 className="homeHeader">{findPage()}</h1>
                {items && items.map((item) => (
                    <div className="itemCard">
                        <img className="itemImg" src={require('./pagePhotos/' + item.imgName)}/> 
                        <h2 className="itemTitle" key={item._id}>{item.name}</h2>
                        <p className="price" key={item._id}>${item.price.toFixed(2)}</p> {/* toFixed(2) -> Turn into number with two decimal places if not already */}
                    </div> /* Use item card to create a card for each item in css */
                ))}
        </div>
    )
}

export default Shop