export function Loader({variant} : {variant: "small" | "large"}) {
const large = {
    width: "250px",
    height: "250px",
    margin: "24px"
}

const small = {
    width: "50px",
    height: "50px",
}

    return (
       <div className="loader-box">
        <span role="status" className="loader" style={variant==="small"? small: large}></span>
       </div> 
    )
}
