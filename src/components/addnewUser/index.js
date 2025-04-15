"use client";

import { addNewUserAction, editUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/context";
import { addNewUserFormControls, addNewUserInitialState } from "@/utils";
import { useContext } from "react";

export default function AddnewUser() {
    const {CurrentEditedId, setCurrentEditedId, openPopUp, setOpenPopUp, addNewUserFormData, setAddNewUserFormData} = useContext(UserContext);
  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every((key)=> addNewUserFormData[key].trim() !== '')
  } 
  async function handleAddNewUserAction () {
    const res = CurrentEditedId !== null ? 
        await editUserAction(CurrentEditedId, addNewUserFormData, '/user') : 
        await addNewUserAction(addNewUserFormData, '/user');
    setOpenPopUp(false);
    setAddNewUserFormData(addNewUserInitialState);
    setCurrentEditedId(null);
  }
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-[150px]">
          <Button
            onClick={() => setOpenPopUp(true)}
            className="rounded-[10px] h-[30px] w-[120px] cursor-pointer bg-black text-white m-10"
          >
            Add New User 
          </Button>
        </div>
        <Dialog open={openPopUp} onOpenChange={() => {
            setOpenPopUp(false);
            setAddNewUserFormData(addNewUserInitialState);
            setCurrentEditedId(null);
        }}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {
                    CurrentEditedId !== null ? "Edit User Detail" : "Add New User"
                }
              </DialogTitle>
            </DialogHeader>
            <form action={handleAddNewUserAction}>
              {addNewUserFormControls.map((controlItem) => (
                <div key={controlItem.name} className="mb-5">
                  <Label htmlFor={controlItem.name} className="text-right mb-5">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    type={controlItem.type}
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(event) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [controlItem.name]: event.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              ))}
                <DialogFooter>
                    <Button disabled={!handleSaveButtonValid()} type="submit" className="cursor-pointer disabled:opacity-55">
                        {
                            CurrentEditedId !== null ? "Update User" : "Save User"
                        }
                    </Button>
                </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
