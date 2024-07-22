import { createContext,useCallback,useState } from 'react'
import { useMemo } from 'react';

const initialState = {
    users : [],
    addUsers : () =>{}
}
const AllUserContext = createContext(initialState)

const AllUserProvider = ({children}) => {
    
    const [users,setUsers] = useState([]);

    const addUsers = useCallback((user) => {
        setUsers([...users,user])
    },[users])

    const value = useMemo(() => ({ users, addUsers }), [users, addUsers]);

    return (
        <AllUserContext.Provider value={value}>
            {children}
        </AllUserContext.Provider>
    )
};

export { AllUserContext,AllUserProvider};