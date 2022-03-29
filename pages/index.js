import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";




export default function Home() {
  const router = useRouter()


  const {
		register,
		handleSubmit,
	} = useForm({
		defaultValues: {
      University: "",
			Department: "",
      Code: ""
		},
	});

  const onSubmit = (data) => {
    console.log(data)
    router.push(`/Classes/${data.Department + data.Code}`)
   
}

  return (
    <div className="w-screen h-screen items-center justify-center">
            <div className = "bg-[#808080] w-[200px] text-white rounded-lg p-2  relative justify-center items-center">
                <form onSubmit = {handleSubmit(onSubmit)}>
                <div className = "mb-1">
                    <input className = "bg-transparent border-[1px] border-white p-1" {...register("University", { required: true })} type = "text" placeholder = "University"/>
                    </div>
                    <div className = "mb-1">
                    <input className = "bg-transparent border-[1px] border-white p-1" {...register("Department", { required: true })} type = "text" placeholder = "Department (ie CITS)"/>
                    </div>
                    <div className = " mb-1">
                    <input className = "bg-transparent border-[1px] border-white p-1" {...register("Code", { required: true })} type = "text" placeholder = "Code (ie 1401)"/>
                    </div>
                    <div className = "ml-1">
                    <input type = "submit"/>
                    </div>


                </form>
            </div>
    </div>

  )
}
