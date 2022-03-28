/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import ClassHeading from "../../../components/ClassHeading";
import axios from "axios"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyCIOInFjEFndR99NETQedlpQdRCS9Z6PVg",
        authDomain: "slide-8410e.firebaseapp.com",
        projectId: "slide-8410e",
        storageBucket: "slide-8410e.appspot.com",
        messagingSenderId: "435182032407",
        appId: "1:435182032407:web:01feffb67888045590ee52"

    })

const auth = firebase.auth();
const firestore = firebase.firestore();


// @ts-ignore
function MainChat(props) {
    const [className, setClassName] = useState("")
    const [placeholder, setPlaceholder] = useState("Write a message")
    // const [messages, setMessages] = useState([{ author: "Jarred", message: "nice" }, { author: "Edan", message: "lol" }])
    const [currentMessage, setCurrentMessage] = useState("")
    const [mobile, setMobile] = useState(false)
    const [textposition, setTextPosition] = useState("absolute top-40 left-40 ml-10")
    const [buttonposition, setButtonPosition] = useState("fixed bottom-5 left-40 ml-10")
    const [textlength, setTextLength] = useState("w-[1500px] border-slate-900 border-[1px] rounded-lg pl-2 h-[50px]")
    const [showContent, setShowContent] = useState(true)

    const [user] = useAuthState(auth)


    const router = useRouter()
    const messageRef = firestore.collection('messages' + props.id)
    const query = messageRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, { idField: 'id' })

    useEffect(() => {
        if (!router.isReady) return;
        const { id } = router.query;
        setClassName(id)
        setPlaceholder(`Write a message to #${id}`)
        setMobile(window.innerWidth < 600)
        if (window.innerWidth < 600) {
            setTextPosition("absolute top-40  ml-10")
            setButtonPosition("fixed bottom-5")
            setTextLength("ml-5 w-[300px] border-slate-900 border-[1px] rounded-lg pl-2 h-[50px]")
        }

    }, [router.isReady,
    ])

    const onSubmit = async () => {
        document.getElementById("messagebox").value = "";


        await messageRef.add({
            message: currentMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            author: user.displayName
        })
        // setMessages((messages) => [
        //     ...messages,
        //     {
        //         author: user.displayName,
        //         message: currentMessage,

        //     },
        // ]);
    }

    const textChange = (e) => {

        setCurrentMessage(e.target.value)

    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
    if (user) {


        return (
            <>
                <ClassHeading />
                <Sidebar showContent={() => setShowContent(true)} removeContent={() => setShowContent(false)} />



                {showContent && (
                    <div>


                        <div className={textposition}>
                            <ul>
                                {messages?.map(function (message, index) {
                                    return (
                                        <li key={index} className="mb-[10px]">
                                            <div className="font-bold">
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
                        <div className={buttonposition}>
                            <div className=" border-5 border-black">
                                <input id="messagebox" onChange={textChange} type="text" className={textlength} placeholder={placeholder} />
                                <button onClick={onSubmit} className="ml-3">Post</button>
                            </div>
                        </div>
                    </div>


                )}


            </>
        );
    } else {
        return <button onClick={signInWithGoogle}>Sign in</button>
    }
}

export default MainChat;



export async function getServerSideProps({ query }) {
    const id = query.id

    return { props: { id } };
}
