/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import ClassHeading from "../../../components/ClassHeading";
import LinkDoc from "../../../components/LinkDoc";


// @ts-ignore
function Resources(props) {
    const [placeholder, setPlaceholder] = useState("Write a message")
    const [messages, setMessages] = useState([{types: "Docs", Link: "https://docs.google.com/document/d/1qy7dkJ6ZFC1mVb9xI6-TpwBA8YOsEcHV/edit", Name: "Week 1"}])
    const [fileURL, setFileUrl] = useState("")
    const [showLinkDoc, setShowLinkDoc] = useState(false)

    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id } = router.query;
        setPlaceholder(`Share a resource with #${id}`)
    }, [router.isReady,
    ])


    const fileChange = (e) => {

		const file = e.target.files[0];

		setFileUrl(URL.createObjectURL(file));

    }

    const docsArray = {
        "Docs": "/google docs.png",
        "Sheets": "/google sheets.png",
        "Slides": "/google slides.png"
    }
    
    const newResource = (newRes) => {
        console.log(newRes)
        setMessages((messages) => [
			...messages,
			newRes
		]);
        setShowLinkDoc(false)
    }

	return (
		<>
                    <ClassHeading />

                    <Sidebar />
        	<div className=" absolute top-40 left-40 ml-10 ">
                <img className = "max-h-[500px]" src = {fileURL}/>
             </div>

             <div className = "grid grid-cols-3 absolute top-40 left-40 ml-10 w-[1000px]">
             {/* <div className="">
                 <p className = "">Default</p>
                <a href = "https://docs.google.com/document/d/1qy7dkJ6ZFC1mVb9xI6-TpwBA8YOsEcHV/edit"><img className = "max-h-[100px] mb-2" src = "/google docs.png"></img></a>
                <LinkDoc />
             </div>
             <div className=" ">
                 <p>Link Google Sheets</p>
                <a href = "https://docs.google.com/document/d/1qy7dkJ6ZFC1mVb9xI6-TpwBA8YOsEcHV/edit"><img className = "h-[130px] mt-[-10px]" src = "/google sheets.png"></img></a>
             </div>
             <div className=" ">
                 <p>Link Google Slides</p>
                <a href = "https://docs.google.com/document/d/1qy7dkJ6ZFC1mVb9xI6-TpwBA8YOsEcHV/edit"><img className = "h-[130px] mt-[-10px]" src = "/google slides.png"></img></a>
             </div> */}
                {messages?.map(function (message, index) {
                    return (
                        <div key={index} className="mb-[10px] text-center">
                            <div className = "font-bold text-[30px]">
                                
                                {message.Name}
                            </div>
                            <div>
                               <a href = {message.Link}><img src = {docsArray[message.types]}></img> </a> 

                            </div>
                            <div>

                            </div>

                        </div>
                    );
                })}
            <img onClick = {() => {setShowLinkDoc(true)}} className = "h-[30px]" src = "/plus.png"></img>

             </div>

             {showLinkDoc && (
                 <div className = "absolute top-[550px] left-40 ml-10 w-[1000px]">
                    <LinkDoc addF = {newResource}/>

                 </div>

            )}





        <div className = "">
            <div className = "">
                <input id = "messagebox" onChange = {fileChange} type = "file" className = " rounded-lg pl-2 h-[50px]" placeholder = {placeholder} />
                {/* <button onClick = {onSubmit} className = "ml-3">Post</button> */}
            </div>
        </div>
		</>
	);
}

export default Resources;
