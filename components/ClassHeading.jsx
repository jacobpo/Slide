/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @ts-ignore
function ClassHeading(props) {
    const [className, setClassName ] = useState("")
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id, studygroup } = router.query;
        if(studygroup){
            setClassName(id + " Group " + studygroup)
        } else {
            setClassName(id)

        }
    }, [router.isReady,
    ])
	return (
		<>
        <div className = "flex justify-center items-center z-0 bg-[#8b9dc3] h-20 text-white font-bold text-[40px]">
            <h1>{className}</h1>
        </div>
		</>
	);
}

export default ClassHeading;
