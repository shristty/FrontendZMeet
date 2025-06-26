
import { useNavigate} from "react-router-dom";
import {useEffect} from "react";
const WithAuth=(WrappedComponent)=>{
const AuthComponent = (props)=>{

const  routeTo = useNavigate();
const isAuthenticated= ()=>{
    if(localStorage.getItem("token")){
        return true;
    }
    return false;
}

useEffect(()=>{
    if(!isAuthenticated()){
       routeTo ("/auth");
 
    }
},[]);
return <WrappedComponent {...props}/>
}
return AuthComponent;
}
export default WithAuth;