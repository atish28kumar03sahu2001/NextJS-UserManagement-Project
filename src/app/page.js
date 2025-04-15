import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="flex flex-col flex-wrap h-screen w-full justify-center items-center">
                <h1 className="text-center break-words text-3xl font-semibold">
                    User Management Project
                </h1>
                <Link href="/user" className="text-white bg-black text-base cursor-pointer px-4 py-2 mt-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400">
                    Click Here
                </Link>
            </section>
        </>
    );
}