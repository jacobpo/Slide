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
    const [mobile, setMobile] = useState(false)
    const [textposition, setTextPosition] = useState("absolute top-40 left-40 ml-10")
    const [buttonposition, setButtonPosition] = useState("fixed bottom-5 left-40 ml-10")
    const [textlength, setTextLength] = useState("w-[1500px] border-slate-900 border-[1px] rounded-lg pl-2 h-[50px]")
    const [showContent, setShowContent] = useState(true)



    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id } = router.query;
        setClassName(id)
        setPlaceholder(`Write a message to #${id}`)
        setMobile(window.innerWidth<600)
        if(window.innerWidth<600){
            setTextPosition("absolute top-40  ml-10")
            setButtonPosition("fixed bottom-5")
            setTextLength("ml-5 w-[300px] border-slate-900 border-[1px] rounded-lg pl-2 h-[50px]")
        }

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
            <Sidebar showContent = {() => setShowContent(true)} removeContent = {() => setShowContent(false)}/>



    {showContent && (
        <div>


        <div className={textposition}>
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
        <div className = {buttonposition}>
            <div className = " border-5 border-black">
                <input id = "messagebox" onChange = {textChange} type = "text" className = {textlength} placeholder = {placeholder} />
                <button onClick = {onSubmit} className = "ml-3">Post</button>
            </div>
        </div>
        </div>


            )}


		</>
	);
}

export default MainChat;
