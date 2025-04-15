'use client';
import { addNewUserInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);
export default function UserState({children}) {
    const [CurrentEditedId, setCurrentEditedId] = useState(null);
      const [openPopUp, setOpenPopUp] = useState(false);
      const [addNewUserFormData, setAddNewUserFormData] = useState( addNewUserInitialState );
    return <UserContext.Provider value={{CurrentEditedId, setCurrentEditedId, openPopUp, setOpenPopUp, addNewUserFormData, setAddNewUserFormData}}>
        {children}
    </UserContext.Provider>
}