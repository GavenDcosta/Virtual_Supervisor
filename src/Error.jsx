import "./Error.css"

export default function Error(){
    return(
        <div className="error">
            <div className="err">
               <h1 className="errtxt">404</h1>
               <h3 className="errstxt">Were Sorry , page not found</h3>
               <h6 className="errsmtxt">The page you are looking for might have been Removed, had its name changed or temporarily unavailable</h6>
            </div>  
        </div>
    )
}