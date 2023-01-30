import React, {useState} from "react";

const UserContext = React.createContext();

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    console.log(user)
    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      );
    }

    

export { UserContext, UserProvider };
