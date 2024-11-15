import React from 'react'
import { Link } from 'react-router-dom';
interface sidbarprops {
    collable: any
}
function Sidebar({ collable }: sidbarprops) {
    const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <>
            <aside className={`min-h-screen ${collable ? 'w-0 collapsed ' : 'w-64 '}  p-2 shadow-lg bg-gray-800 position aside-animatable`}>
                <div className="flex h-screen">
                    <div className="bg-gray-800 text-white w-64 p-4 space-y-6">
                        {/* Sidebar Header */}
                        <div className="text-xl font-semibold">Company Logo</div>
                        {/* Sidebar Links with Dropdowns */}
                        <nav>
                            {/* Dropdown Item 1 */}

                            <div>
                                <Link to="/profile" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Profile</Link>
                            </div>
                            <div>
                                <button
                                    onClick={() => toggleDropdown(1)}
                                    className="flex items-center w-full p-2 text-left hover:bg-gray-700 focus:outline-none transition"
                                >
                                    <span className="flex-1">Candidate Management</span>
                                    <span className="ml-2">{openDropdown === 1 ? '-' : '+'}</span>
                                </button>
                                <div
                                    className={`pl-4 overflow-hidden transition-max-height duration-500 ease-in-out ${openDropdown === 1 ? 'max-h-40' : 'max-h-0'
                                        }`}
                                >
                                    <Link to="/candidate" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600"> Candidate</Link>
                                    <Link to="/bulk-upload" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Bulk Action</Link>
                                </div>
                            </div>

                            {/* client management */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown(3)}
                                    className="flex items-center w-full p-2 text-left hover:bg-gray-700 focus:outline-none transition"
                                >
                                    <span className="flex-1">Client Management</span>
                                    <span className="ml-2">{openDropdown === 3 ? '-' : '+'}</span>
                                </button>
                                <div
                                    className={`pl-4 overflow-hidden transition-max-height duration-500 ease-in-out ${openDropdown === 3 ? 'max-h-40' : 'max-h-0'
                                        }`}
                                >
                                    <Link to="/client" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600"> Client</Link>
                                </div>
                            </div>
                            {/* client management */}


                            {/* Dropdown Item 2 */}
                            <div>
                                <button
                                    onClick={() => toggleDropdown(2)}
                                    className="flex items-center w-full p-2 text-left hover:bg-gray-700 focus:outline-none  transition"
                                >
                                    <span className="flex-1">Settings</span>
                                    <span className="ml-2">{openDropdown === 2 ? '-' : '+'}</span>
                                </button>
                                <div
                                    className={`pl-4 overflow-hidden transition-max-height duration-500 ease-in-out ${openDropdown === 2 ? 'max-h-40' : 'max-h-0'
                                        }`}
                                >
                                    <Link to="/designation" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Designation</Link>
                                    <Link to="/region" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Region</Link>
                                    <Link to="/tag" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Tag</Link>
                                    <Link to="/education" className="block p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Education</Link>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>

            </aside>

        </>
    )
}

export default Sidebar
