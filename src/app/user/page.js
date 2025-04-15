import { fetchUserAction } from "@/actions";
import AddnewUser from "@/components/addnewUser";
import SingleUser from "@/components/singleuser";

export default async function User() {
    const getListOfUsers = await fetchUserAction();
    return (
        <>
            <header className="bg-black flex justify-center items-center">
                <h1 className="m-10 text-center break-words font-semibold text-3xl text-white">
                    User Management
                </h1>
            </header>
            <section>
                <AddnewUser />
            </section>
            <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ? 
                    getListOfUsers.data.map(userItem => <SingleUser key={userItem._id} user={userItem} />) 
                    : <h3>No User Data Available</h3>
                }
            </section>
        </>
    );
}