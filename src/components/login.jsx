
    import {useContext , useEffect} from "react";
    import { signInWithGoogle , auth  } from "../firebase";
    import { authContext } from "../AuthProvider";
    import { Redirect } from "react-router-dom";

    let Login=()=>{
        let user =useContext(authContext);
    
      return(
        <>
        {user ? <Redirect to="/" /> : ""}
        
        <div class="ggl-img"></div>
        
        <button 
        onClick={()=>{
            signInWithGoogle();
        }}
        className="btn btn-primary  login"
        >
            Login with google

         </button>  
         </> 
     );

};
export default Login;
