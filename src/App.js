
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import AuthProvider from "./AuthProvider";
import {useEffect} from "react";
import { firestore } from "./firebase";

let App=()=>{

        // useEffect(()=>{
           
        //     async function f(){
        //         let querySnapshot=await firestore.collection("users").get();
        //         for(let i=0;i<querySnapshot.docs.length;i++){
        //             console.log(querySnapshot.docs[i].data());
        //         }
        //     }f();
        // },[]);

        return (
         <>
           
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            <Login/>
                        </Route>

                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
         </>
        );
};
export default App;