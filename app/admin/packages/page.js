"use client"
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase.lib";
import { onSnapshot, collection, query, orderBy, limit } from "firebase/firestore";

export default function packages() {
    const [packages, setPackages] = useState([]);

    useEffect(() => { }, [])
    return (
        <section className="pt-[68px] grid grid-cols-3 gap-6 py-12 px-8 md:px-12 lg:px-16">
            <article className="col-span-2 border border-gray-500 rounded-md p-6">
                <h2 className="text-3xl text-gray-800 mb-6">Recent Packages</h2>

                <div className="grid grid-cols-2 gap-6 border border-gray-400 p-4 rounded-md cursor-pointer">
                    <p className="flex flex-col gap-2">
                        <span className="text-md text-gray-600" >Johnson Wale</span>
                        <span className="text-smtext-gray-600" >Created on 24th August, 2024 @ 14:20</span>
                        <span className="text-md text-gray-600" >Used Dell Laptop with External Mouse</span>
                    </p>

                    <blockquote className="grid grid-cols-2 gap-4 border border-gray-400 p-2 rounded-md">
                        <p className="flex flex-col gap-2 p-4 bg-gray-200 rounded-md">
                            <span className="text-gray-800 text-md">Origin</span>
                            <span className="text-gray-800 text-xl uppercase">Abuja</span>
                        </p>
                        <p className="flex flex-col gap-2 p-4 bg-gray-200 rounded-md">
                            <span className="text-gray-800 text-md">Destination</span>
                            <span className="text-gray-800 text-xl uppercase">Asaba</span>
                        </p>
                    </blockquote>
 
                </div>
            </article>

            <aside className="bg-gray-800 rounded-md p-6">

            </aside>
        </section>
    )
}