/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @ts-ignore
function ClassHeading(props) {
    const [className, setClassName ] = useState("")
    const [id, setID] =  useState("")
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id, studygroup } = router.query;
        setID(id)
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
            <Link href = {`/Classes/${id}`}><a>{className}</a></Link>
        </div>
		</>
	);
}

export default ClassHeading;
