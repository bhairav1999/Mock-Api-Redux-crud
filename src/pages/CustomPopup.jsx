import React from 'react'
import { useSelector } from 'react-redux'

const CustomPopup = ({ isOpen, setIsOpen, isId }) => {

    const allData = useSelector(store => store.app.users)
    const viewdata = allData.filter((ele) => ele.id === isId)

    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center z-50`}>
                <div className="fixed inset-0 bg-black opacity-90"></div>
                <div className="bg-white p-8 rounded-lg shadow-lg z-10">
                    <h2 className="text-xl font-semibold">{viewdata[0].name}</h2>
                    <h5>{viewdata[0].email}</h5>
                    <p className="mb-4 mt-2">Age : {viewdata[0].age}</p>
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </div>


        </>
    )
}

export default CustomPopup