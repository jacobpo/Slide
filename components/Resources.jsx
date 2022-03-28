/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @ts-ignore
function Resources(props) {
    const [className, setClassName ] = useState("")
    const [placeholder, setPlaceholder] = useState("Write a message")
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState("")
    const [fileURL, setFileUrl] = useState("")

    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id } = router.query;
        setClassName(id)
        setPlaceholder(`Share a resource with #${id}`)
    }, [router.isReady,
    ])



    const textChange = (e) => {

        setCurrentMessage(e.target.value)

    }

    const fileChange = (e) => {

		const file = e.target.files[0];

		setFileUrl(URL.createObjectURL(file));

    }

	return (
		<>
        	<div className=" absolute top-40 left-40 ml-10 ">
                <img className = "max-h-[500px]" src = {fileURL}/>
             </div>
        <div className = "fixed bottom-5 left-40">
            <div className = "">
                <input id = "messagebox" onChange = {fileChange} type = "file" className = " rounded-lg pl-2 h-[50px]" placeholder = {placeholder} />
                {/* <button onClick = {onSubmit} className = "ml-3">Post</button> */}
            </div>
        </div>
		</>
	);
}

export default Resources;
