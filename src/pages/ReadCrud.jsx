import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/UserDeatialsSlice'
import { Link, useNavigate } from 'react-router-dom'
import CustomPopup from './CustomPopup'

const ReadCrud = () => {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const { users, loading, searchData } = useSelector(store => store.app)
    const [isOpen, setIsOpen] = useState(false)
    const [isId, setIsId] = useState(false)
    const [radiodata, setRadioData] = useState("")

    console.log(searchData)
    useEffect(() => {
        dispatch(showUser())
    }, [])
    if (loading) {
        return <h2>loading...</h2>
    }
    const handleAdd = () => {
        naviagte("/")
    }

    const handleView = (id) => {
        setIsId(id)
        setIsOpen(true)
    }

    const searchItem = users.filter((ele) => {
        if (searchData.length === 0) {
            return ele;
        } else {
            return ele.name.toLowerCase().includes(searchData.toLowerCase());
        }
    }).filter((ele) => {
        if (radiodata === "male") {
            return ele.gender === radiodata
        }
        else if (radiodata === "female") {
            return ele.gender === radiodata
        } else {
            return ele
        }
    })

    return (
        <>

            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">User Data</h2>

                    </div>
                    <div className="bg-gray-100  rounded-lg shadow-md">
                        <div className="flex gap-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="gender" checked={radiodata === ""} onChange={() => setRadioData("")} value="male" className="form-radio text-blue-500" />
                                <span className="text-lg font-semibold text-gray-800">All</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="gender" checked={radiodata === "male"} onChange={(e) => setRadioData(e.target.value)} value="male" className="form-radio text-blue-500" />
                                <span className="text-lg font-semibold text-gray-800">Male</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="gender" checked={radiodata === "female"} onChange={(e) => setRadioData(e.target.value)} value="female" className="form-radio text-pink-500" />
                                <span className="text-lg font-semibold text-gray-800">Female</span>
                            </label>

                        </div>
                    </div>
                    <div>
                        <button onClick={handleAdd} type="button" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Add new employee
                        </button>
                    </div>

                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="divide-x divide-gray-200">
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                                                <span>id</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                                                Age
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                                                Gender
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                Edit
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                Delete
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                view
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {
                                            searchItem.map((item) => {
                                                return (
                                                    <tr className="divide-x divide-gray-200 ">
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <div className="flex items-center">
                                                                <div className="h-10 w-10 flex-shrink-0">
                                                                    <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">
                                                                        {item.name}
                                                                    </div>
                                                                    <div className="text-sm text-gray-500">{item.email}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='text-center'>{item.age}</td>
                                                        <td className='text-center'>{item.gender}</td>
                                                        <td className='text-center'><Link to={`/edit/${item.id}`}><button>Edit</button></Link></td>
                                                        <td className='text-center'><button onClick={() => dispatch(deleteUser(item.id))}>Delete</button></td>
                                                        <td className='text-center'><button onClick={() => handleView(item.id)}>view</button></td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                isOpen && <CustomPopup isId={isId} isOpen={isOpen} setIsOpen={setIsOpen} />
            }

        </>
    )
}

export default ReadCrud