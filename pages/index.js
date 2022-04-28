import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [university, setUniversity] = useState('')
  const [uniList, setUniList] = useState([])
  const router = useRouter()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      University: '',
      Department: '',
      Code: '',
    },
  })

  useEffect(async () => {
    const response = await axios.get(
      `http://universities.hipolabs.com/search`,
      {
        params: { name: university },
      },
    )
    console.log(response.data.slice(0, 10))
    setUniList(response.data.slice(0, 3))
  }, [university])

  const onSubmit = (data) => {
    console.log(data)
    router.push(`/Classes/${data.Department + data.Code}`)
  }

  return (
    <div className="w-screen h-screen items-center justify-center">
      <div className="bg-[#808080] text-white rounded-lg p-2  relative justify-center items-center w-full h-full flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center border-2 border-white p-2 rounded-lg  w-80 h-80"
        >
          <div className="mb-1">
            <input
              className="bg-transparent border-[1px] border-white p-1 "
              type="text"
              placeholder="University"
              {...register('University', {
                onChange: (e) => setUniversity(e.target.value),
              })}
              id="uni"
            />
          </div>

          {university && (
            <div className="z-1">
              <ul>
                {/* @ts-ignore  */}
                {uniList.map(function (uni, index) {
                  return (
                    <li
                      onClick={() => {
                        document.getElementById('uni').value = uni.name
                        setUniversity('')
                      }}
                      key={index}
                      className="mb-[10px] w-full"
                    >
                      {uni.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          <div className="mb-1 z-0">
            <input
              className="bg-transparent border-[1px] border-white p-1"
              {...register('Department', { required: true })}
              type="text"
              placeholder="Department (ie CITS)"
            />
          </div>
          <div className=" mb-1">
            <input
              className="bg-transparent border-[1px] border-white p-1"
              {...register('Code', { required: true })}
              type="text"
              placeholder="Code (ie 1401)"
            />
          </div>
          <div className="ml-1">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
