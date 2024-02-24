import PropTypes from "prop-types"
function Student (props){
    return(
        <div className="std">
        <p>Name: {props.name}</p>
        <p>Age:{props.age}</p>
        <p>isPass: {props.isPass ? "yes" : "no"}</p>
        </div>
    )
}

Student.prototype ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool

}

Student.defaultProps ={
    name: "Guest",
    age: "00",
    isPass:true
}
export default Student