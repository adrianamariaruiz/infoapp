import { createContext, useState } from "react"

export const InfoContext = createContext("")

const UserProvider = ({children}) => {
    const [infoKey, setInfoKey] = useState("")
    return (
        <InfoContext.Provider value={{infoKey, setInfoKey}}>
            {children}
        </InfoContext.Provider>
    )
}

export default UserProvider



