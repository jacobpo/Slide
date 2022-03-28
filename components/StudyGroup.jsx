/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @ts-ignore
function StudyGroup(props) {
    const [className, setClassName ] = useState("")
    const [placeholder, setPlaceholder] = useState("Write a message")
    const [messages, setMessages] = useState(["Group 1", "Group 2"])
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
        	<div className=" absolute top-40 left-40 ml-10">
         
            <ul>
                {messages?.map(function (message, index) {
                    return (
                        <li key={index} className="mb-[10px]">
                            <div className = "font-bold">
                                {message}
                            </div>

                        </li>
                    );
                })}
            </ul>
        </div>

		</>
	);
}

export default StudyGroup;
