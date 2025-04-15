"use server";

import connectToDB from "@/database";
import users from "@/models/users";
import { revalidatePath } from "next/cache";

export async function addNewUserAction(formData, pathToRevalidate) {
    await connectToDB();
    try {
        const newUser = await users.create(formData);
        if(newUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User Added Successfully!"
            }
        } else {
            return {
                success: false,
                message: "Something Went Wrong! Please Try Again!",
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal Server Error! Please Try Again!",
        }
    }
}

export async function fetchUserAction () {
    await connectToDB();
    try {
        const listOfUser = await users.find({});
        if(listOfUser) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(listOfUser)),
            }
        } else {
            return {
                success: false,
                message: "Something Went Wrong! Please Try Again!",
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal Server Error! Please Try Again!",
        }
    }
}

export async function deleteUserAction(currentUserID, pathToRevalidate) {
    await connectToDB();
    try {
        const deletedUser = await users.findByIdAndDelete(currentUserID);
        if(deletedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User Deleted Successfully!"
            }
        } else {
            return {
                success: false,
                message: "Something Went Wrong! Please Try Again!",
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal Server Error! Please Try Again!",
        }
    }
}

export async function editUserAction(currentUserID, formData, pathToRevalidate) {
    await connectToDB();
    try {
        const {firstname, lastname, email, address, phone, position} = formData;
        const UpdatedUser = await users.findOneAndUpdate(
            {_id: currentUserID}, 
            {firstname, lastname, email, address, phone, position}, 
            {new: true}
        );
        if(UpdatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User Updated Successfully!"
            }
        } else {
            return {
                success: false,
                message: "Something Went Wrong! Please Try Again!",
            }
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Internal Server Error! Please Try Again!",
        }
    }
}