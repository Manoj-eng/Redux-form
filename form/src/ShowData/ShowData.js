import React from 'react';
import {useSelector} from 'react-redux';


const ShowData = () => {
    const var1 = useSelector(state => state.name)
    const var2 = useSelector(state => state.email)
     const var3 = useSelector(state => state.Password)




return(
    
    <div>
    <h2> name : {var1} </h2>
    <h2>email : {var2} </h2>
     <h2>Password : {var3} </h2> 
    </div>
    
)
}

export default ShowData