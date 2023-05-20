import { Fragment } from 'react'
import { services } from './service/data'
export const Card = () => {

    return (
        <Fragment>
            {services.map((value, key) => {
                return (
                    <div key={key} className='grid max-w-sm p-1 rounded-lg shadow-md hover:shadow-lg border-1  bg-gradient-to-r from-purple-600 to-blue-500  hover:first-line:bg-gradient-to-l  relative'>
                        {/* logo */}
                        <div className='flex gap-5 items-center bg-[#222831] py-4 px-4 rounded-lg'>
                            <div className=''>
                                <img src={value.logo} alt="logo" />
                                {/* title */}
                            </div>
                            <div>
                                <h1 className='text-lg'>{value.keyword}</h1>
                                {/* description */}
                                <div>{value.description}</div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </Fragment>
    )
}