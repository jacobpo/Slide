/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @ts-ignore
function Sidebar(props) {
    const [id, setID] = useState("")
    const [showGroups, setShowGroups] = useState(false)
    const [groups, setGroups] = useState([{Name: "Group 1", id: 1}, {Name: "Group 2", id: 2}])
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;
		const { id } = router.query;
        console.log(id)
        setID("/" + id)
    }, [router.isReady,
    ])
	return (
		<>
			<div className=" flex flex-col items-center  h-screen bg-[#8b9dc3] w-40  text-center text-white space-y-8">
				{/* <div onClick = {props.chat}>
						<a>Chat</a>

				</div> */}
                	<Link href={`/Classes${id}/chat`}>
						<a>Chat</a>
					</Link>
				{/* </div> */}
                <Link href={`/Classes${id}/resources`}>
						<a>Resources</a>
					</Link>
                <div onClick = {() => (setShowGroups(true))}>
						<a>Join study group</a>
                        {showGroups && (
                            <span>
                        <ul>
                            {groups?.map(function (group, index) {
                                return (
                                    <li key={index} className="mb-[5px]">
                                        <a href = {`/Classes${id}/studygroups/${group.id}`}> {group.Name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        </span>

                        )}

				</div>
                <div>
					<Link href="/">
						<a>Placeholder</a>
					</Link>
				</div>
                <div>
					<Link href="/">
						<a>Placeholder</a>
					</Link>
				</div>
                <div>
					<Link href="/">
						<a>Placeholder</a>
					</Link>
				</div>
            </div>
		</>
	);
}

export default Sidebar;
