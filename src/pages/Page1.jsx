import Page2 from "./Page2"
import { useState, createContext } from "react"



export const UserContext = createContext();

const Page1 = () => {

    const [user, setUser] = useState("Atilla")

    return (
        <div style={{ border: "2px solid black", margin: "40px 40px ", padding: "30px" }}>

            <h1>Page1</h1>
            
            <p>{`atilla ${user} ${setUser}`}</p>


            <UserContext.Provider value={user}>
                <Page2 />
            </UserContext.Provider>

        </div>
    )
}

export default Page1
