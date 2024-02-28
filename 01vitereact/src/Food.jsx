//fragments and map method

import FoodList from "./FoodList"

function Food(){
    let foodItems = ["dal","biscuits", "chocolets", "maggie","cupcake"]
    return (
        <>
        <h1>Food Items Shopping</h1>
        {foodItems.length === 0 ? <h3>Nothing for Shopping</h3> : <h3>grab this items</h3> } 
       <FoodList List={foodItems} ></FoodList>
        </>
    )
}

export default Food