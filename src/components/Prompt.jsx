import { Fragment, useState } from 'react';
import "../App.css"
export const Prompt = () => {
    const [userData, setUserData] = useState({
        message: "",
        responds: ""
    })
    function checker() {
        const newList = userData.message
        var ul = document.querySelector("#user");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newList));
        ul.appendChild(li);



    }
    return (
        <Fragment>
            <section className='relative h-96 flex justify-center w-full'>
                <div className=' relative overflow-y-scroll w-full'>
                    <h1 className='text-center p-5'>Start Conversation</h1>
                    <div className='playground h-full grid lg:md:grid-cols-2 gap-5 '>
                        <div className='relative flex justify-center items-center'>
                            <ul className='absolute top-2 w-full' id='user'>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className='absolute bottom-0 flex  place-center w-full  bg-[#222831]'>
                    <textarea onChange={(e) => { setUserData({ ...userData, message: e.target.value }) }} rows="1" className='relative w-full resize-none overflow-y-auto text-sm bg-transparent  rounded-lg border-1  outline-none border shadow-sm border-gray-500  appearance-none text-white p-5' ></textarea>
                    <button onClick={checker} className=' p-5'><span className="material-symbols-outlined text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-sky-400 hover:text-white shadow-white ">
                        send
                    </span></button>
                </div>
            </section>
        </Fragment >
    )
}