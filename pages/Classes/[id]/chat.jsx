/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import ClassHeading from "../../../components/ClassHeading";



// @ts-ignore
function MainChat(props) {
    const [className, setClassName ] = useState("")
    const [placeholder, setPlaceholder] = useState("Write a message")
    const [messages, setMessages] = useState([{author: "Jarred", message: "nice"}, {author: "Edan", message: "lol"}])
    const [currentMessage, setCurrentMessage] = useState("")

    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id } = router.query;
        setClassName(id)
        setPlaceholder(`Write a message to #${id}`)
    }, [router.isReady,
    ])

    const onSubmit = () => {
        document.getElementById("messagebox").value = "";

        setMessages((messages) => [
			...messages,
			{   
                author: "Jacob",
				message: currentMessage,
				
			},
		]);
    }

    const textChange = (e) => {

        setCurrentMessage(e.target.value)

    }
	return (
		<>
            <ClassHeading />

            <Sidebar />

        	<div className=" absolute top-40 left-40 ml-10">
            <ul>
                {messages?.map(function (message, index) {
                    return (
                        <li key={index} className="mb-[10px]">
                            <div className = "font-bold">
                                {message.author}
                            </div>
                            <div>
                            {message.message}
                            </div>

                        </li>
                    );
                })}
            </ul>
        </div>
        <div className = "fixed bottom-5 left-40">
            <div className = "ml-10 border-5 border-black">
                <input id = "messagebox" onChange = {textChange} type = "text" className = "w-[1500px] border-slate-900 border-[1px] rounded-lg pl-2 h-[50px]" placeholder = {placeholder} />
                <button onClick = {onSubmit} className = "ml-3">Post</button>
            </div>
        </div>
		</>
	);
}

export default MainChat;
