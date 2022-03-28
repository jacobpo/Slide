/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


// @ts-ignore
function LinkDoc(props) {

    const {
		register,
		handleSubmit,
	} = useForm({
		defaultValues: {
			Link: "",
            Name: ""
		},
	});


    const router = useRouter()
    useEffect(() => {

    }, [])

    const onSubmit = (data) => {
        console.log(data)
        props.addF(data)
    }

	return (
		<>
            <div className = "bg-[#808080] w-[200px] text-white rounded-lg p-2">
                <form onSubmit = {handleSubmit(onSubmit)}>
                <div className = "bg-transparent mb-1">
                    <select  id="types" name="types" {...register("types", { required: true })} className = "bg-transparent border-[1px] border-white"> 
                        <option value="Docs">Docs</option>
                        <option value="Sheets">Sheets</option>
                        <option value="Slides" selected>Slides</option>
                    </select>
                    </div>

                    <div className = "mb-1">
                    <input className = "bg-transparent border-[1px] border-white p-1" {...register("Link", { required: true })} type = "text" placeholder = "Link"/>
                    </div>
                    <div className = " mb-1">
                    <input className = "bg-transparent border-[1px] border-white p-1" {...register("Name", { required: true })} type = "text" placeholder = "Name"/>
                    </div>
                    <div className = "ml-1">
                    <input type = "submit"/>
                    </div>


                </form>
            </div>
		</>
	);
}

export default LinkDoc;
