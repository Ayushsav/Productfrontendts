import React from 'react';
import Layout from '../../../component/Layout/Layout';
import Breadcrumb from '../../../Common/BreadCrumb/BreadCrumb';
import Modal from '../../../Common/Modal/Modal';

const Designation: React.FC = () => {
    const [isOpen, setOpen] = React.useState<boolean>(false);

    return (
        <Layout>
            <Breadcrumb pageName="Designation" />
            <div className="designation_header">
                <button
                    onClick={() => setOpen(true)}
                    className="px-4 py-2 bg-yellow-400 border capitalize"
                >
                    Add Designation
                </button>
            </div>
            {isOpen && (
                <Modal setOpen={setOpen}>
                    <div className='w-[300px] md:w-[300px]'>

                        <form action="">
                            <div className="flex flex-col ">
                                <label className='my-2 text-lg' htmlFor="Name">Name</label>
                                <input type="text" className='w-full border px-2' name="" id="" />
                            </div>

                            <div className="flex my-2">
                                <button className='bg-blue-300 w-full text-sm text-white uppercase py-1 '>submit</button>
                            </div>
                        </form>
                    </div>

                </Modal>
            )}
        </Layout>
    );
};

export default Designation;
