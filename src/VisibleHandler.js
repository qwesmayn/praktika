import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const VisibilityHandler = ({children, notAllowedRoute}) => {

    const location = useLocation();
    const [isVisiable, setIsVisiable] = useState(null);

    const notEmtpy = arr => arr.some( el => el === null );
    const allowed = ( arr ) => {
        let res = notEmtpy(arr.map((path) => location.pathname.match(path) ));
        if(!res) return null
        return true
    }

    useEffect( ()=> {
        setIsVisiable(allowed(notAllowedRoute))
    }, [location, window.location])

    return (
        <>
          { isVisiable && children }
        </>
    )
}