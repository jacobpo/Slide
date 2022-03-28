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
    const [mobile, setMobile] = useState(false)
    const [docWidths, setDocWidths] = useState("grid grid-cols-3 absolute top-40 left-40 ml-10 w-[1000px]")
    const [linkDocWidths, setLinkDocWidths] = useState("grid grid-cols-3 absolute top-40 left-40 ml-10")
    const [showContent, setShowContent] = useState(true)



    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id } = router.query;
        setPlaceholder(`Share a resource with #${id}`)
        if(window.innerWidth <600){
            setMobile(true)
            setDocWidths("grid absolute top-40 ml-10")
        }
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

        <Sidebar showContent = {() => setShowContent(true)} removeContent = {() => setShowContent(false)}/>


        {showContent && (
            <div>


        	{/* <div className=" absolute top-40  ml-10 ">
                <img className = "max-h-[500px]" src = {fileURL}/>
             </div> */}

             <div className = {docWidths}>
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
                 <div className = "absolute top-[550px] left-40 ml-10 ">
                    <LinkDoc addF = {newResource}/>

                 </div>

            )}




{/* 
        <div className = "">
            <div className = "">
                <input id = "messagebox" onChange = {fileChange} type = "file" className = " rounded-lg pl-2 h-[50px]" placeholder = {placeholder} />
            </div>
        </div> */}

        </div>

            )}
		</>
	);
}

export default Resources;
