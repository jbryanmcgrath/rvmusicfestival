import React from 'react'


export const LandingPage = () => {
    return (
        <div className='bg-deep-champagne bg-cover'>
            <div>
                <h1>Rabbit Valley Music Festival</h1>
                <h2>
                    October 9 & 10
                </h2>
            </div>
            <lineup>
                <div className="grid grid-rows-2 grid-flow-col gap-4">

                    <h1>
                        The Vagabonds
                    </h1>
                    <h1>
                        The Vagabonds
                    </h1>
                    <h1>
                        The Vagabonds
                    </h1>
                    <h1>
                        The Vagabonds
                    </h1>

                </div>
            </lineup>
            <div>
                <button className='bg-medium-carmine  border-2 border-black text-black hover:text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-polished-pine rounded-full'>Buy Tickets</button>
            </div>
        </div>
    )
}
