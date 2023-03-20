import React from 'react'
import { atom, useAtom } from 'jotai'

export const bdayList = atom([{
    img: 'link',
    name: 'alan',
    age: '21'
},
{
    img: 'link',
    name: 'shawn',
    age: '25'
},
{
    img: 'link',
    name: 'gwen',
    age: '22'
},
{
    img: 'link',
    name: 'wilson',
    age: '25'
},
])

const Home = () => {

    const [data, setData] = useAtom(bdayList)

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[28rem] h-[32rem] p-3 shadow-xl bg-blue-300 text-white rounded-md'>
                {data.map((item, index) => {
                    return (
                        <>
                            <h3>{item.img}</h3>
                            <h3>{item.name}</h3>
                            <h3>{item.age}</h3>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Home