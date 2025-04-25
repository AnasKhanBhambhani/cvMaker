import React from 'react'

const Fotter = () => {
    return (
        <footer class=" bg-gradient-to-r from-blue-800 to-indigo-900 text-gray-300 py-6 px-16 font-sans">
            <div class="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
                <p class="text-[15px] leading-loose">© CV MAKER. All rights reserved.</p>

                <ul class="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
                    <li><a href="javascript:void(0)" class="text-[15px] hover:text-white">Terms of Service</a></li>
                    <li><a href="javascript:void(0)" class="text-[15px] hover:text-white">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)" class="text-[15px] hover:text-white">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Fotter
