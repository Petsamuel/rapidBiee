import { Fragment } from 'react'
import { services } from './service/data'
export const Sidebar = () => {

    return (
        <Fragment>
            <section>
                <div className='mx-2 my-6 overflow-y-auto'>
                    {/* title */}
                    <h3 className='my-2 font-bold'>Solutions</h3>
                    <ul>
                        {services.map((value, key) => {
                            return (
                                <li className='py-2 text-sm' key={key}>
                                    <a href="#">{value.name}</a>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </section>


        </Fragment>
    )
}