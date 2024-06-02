import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/UserDeatialsSlice'
import { useNavigate } from 'react-router-dom'

const FormCrud = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(user))
        navigate("/read")
    }
    return (
        <>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                form data
                            </h2>

                            <form action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900">

                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                name="name"
                                                value={user.name}
                                                onChange={handleChange}
                                                placeholder="name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label for="" className="text-base font-medium text-gray-900">

                                                Email
                                            </label>

                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                name="email"
                                                value={user.email}
                                                onChange={handleChange}
                                                placeholder="email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label for="" className="text-base font-medium text-gray-900">

                                                Age
                                            </label>

                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                name="age"
                                                value={user.age}
                                                onChange={handleChange}
                                                placeholder="age"
                                            />
                                        </div>
                                    </div>
                                    <label for="" className="text-base font-medium text-gray-900">Gender
                                    </label>
                                    <div className="justify-center items-center ">


                                        <div className="bg-gray-100  rounded-lg shadow-md">
                                            <div className="flex gap-3">

                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <input type="radio" name="gender" onChange={handleChange} value="male" className="form-radio text-blue-500" />
                                                    <span className="text-lg font-semibold text-gray-800">Male</span>
                                                </label>

                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <input type="radio" name="gender" onChange={handleChange} value="female" className="form-radio text-pink-500" />
                                                    <span className="text-lg font-semibold text-gray-800">Female</span>
                                                </label>

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleSubmit}
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Get started

                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FormCrud