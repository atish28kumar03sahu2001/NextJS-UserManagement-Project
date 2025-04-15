'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import { useContext } from "react";
import { UserContext } from "@/context";
  
export default function SingleUser({user}) {
    const {setCurrentEditedId, setOpenPopUp, setAddNewUserFormData} = useContext(UserContext);
    async function HandleUserDelete(userId) {
        const res = await deleteUserAction(userId, '/user');
        console.log("Result:", res);
    }
    function HandleUserEdit(user) {
        setOpenPopUp(true);
        setAddNewUserFormData({
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email,
            address: user?.address,
            phone: user?.phone,
            position: user?.position
        });
        setCurrentEditedId(user?._id);
    }
    return (
        <>
            <Card className="m-5">
                <CardHeader>
                    <CardTitle>{user?.firstname}</CardTitle>
                    <CardDescription>{user?.firstname}{user?.lastname}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{user?.email}</p>
                    <p>{user?.address}</p>
                    <p>{user?.phone}</p>
                    <p>{user?.position}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap justify-between items-center">
                    <Button className="rounded-[5px] cursor-pointer bg-black text-white" onClick={() => HandleUserDelete(user?._id)}>Delete</Button>
                    <Button className="rounded-[5px] cursor-pointer bg-black text-white" onClick={() => HandleUserEdit(user)}>Edit</Button>
                </CardFooter>
            </Card>

        </>
    );
}