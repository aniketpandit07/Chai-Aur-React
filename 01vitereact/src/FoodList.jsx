import ListItem from "./ListItem";

function FoodList ({List}){
    
    return(
        <>
        <ul>
        {List.map((item)=>(
            <ListItem  key={item}  List={item}></ListItem>
        ) )}
        </ul>
        
    </>
    );
}
export default FoodList