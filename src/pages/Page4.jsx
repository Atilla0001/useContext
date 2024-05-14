
import  {useContext} from "react"
import {UserContext} from './Page1'

const Page4 = () => {
  const user = useContext(UserContext)
  return (
    <div style={{ border:"2px solid black", margin:"40px 40px ",padding:"30px"}}>

      <h1>Page4</h1>
      <p>{`${user}`}</p>
    </div>
  )
}

export default Page4
