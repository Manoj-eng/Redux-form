
import React  from 'react'
import {useDispatch} from 'react-redux'
import formVal from '../redux/Action'


const Form = () =>{

    const Show = ({history}) =>{
        history.push("/")
  }

    const[Item,setItem] = React.useState({
        Name:'', 
        Email:'',
        Password:'',     
    })

    const getmyVal = (e) => {
        setItem({...Item, [e.target.name]:e.target.value})
        console.log(Item)
    }
    const dispatch = useDispatch()

  

    return(
        <div>
        <div>
        <label htmlFor="Name">Enter Your Name</label>
        <input type="text" value={Item.Name} onChange={getmyVal} Name="Name" />
        </div>
        <div>
        <label htmlFor="Email">Enter Your Email</label>
        <input type="text" value={Item.Email} onChange={getmyVal} Name="Email" />
        </div>
        <div>
        <label htmlFor="Password">Enter Your Password</label>
        <input type="text" value={Item.Password} onChange={getmyVal} Name="Password" />
        </div>
        <div>
           
           
            <button onClick={() => dispatch(formVal({name:Item.Name,email:Item.Email,Password:Item.Password}))}>Submit</button>
        
          <button onClick={Show}></button>
        </div>
        
    </div>
    )
 
}
export default Form