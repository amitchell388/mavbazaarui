import { createContext, useContext, useState } from "react";
//lowkey dont worry about this part its to muhc just make the gloab intance of teh user 
// and makes sure teh data is stored accross teh apge even after reload 

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const [user, setUserState] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });


    const setUser = (data) => {
        if (data) {
            localStorage.setItem("user", JSON.stringify(data));
        } else {
            localStorage.removeItem("user"); 
        }
        setUserState(data);
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

// createContext — creates the shared box
// useContext — lets components reach into the box
// useState — stores the user data


// createContext — creates the shared box


//React component that will wrap your whole app. children means "whatever is inside this component
// user is the current user data, setUser is the function to update it

// UserContext.Provider — puts things into the box
// value={{ user, setUser }} — these are the things going into the box, so any component can access them
// {children} — renders your whole app inside this wrapper
