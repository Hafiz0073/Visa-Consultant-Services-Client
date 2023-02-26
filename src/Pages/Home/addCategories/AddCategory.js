import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthCOntext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";


const AddCategory = () => {
    // const { user } = useContext(AuthCOntext)
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    useTitle()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const service_id = parseInt(form.service_id.value);
        const Details = form.Details.value;
        const price = parseInt(form.price.value);
        const image = form.image.value;
        form.reset();


        const addservice = {

            title: title,
            service_id: service_id,
            Details: Details,
            price: price,
            image: image,
        };

        fetch("https://hafiz-consultancy-server-hafiz0073.vercel.app/visacategories", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addservice)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message);

                } else {
                    Swal.fire(data.error);
                }
                // navigate(from, { replace: true })
            })

            .catch(err => {
                toast.error(err.message);
            })

    };

    return (
        <div className="py-32 px-4 min-h-screen w-full">
            <div className="bg-white p-4 md:w-3/4 lg:w-full mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Service No
                        </label>
                        <input
                            type="text"
                            name="service_id"
                            placeholder="Service No"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Service Name
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Name"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Price
                        </label>
                        <input
                            type="text"
                            name="price"
                            placeholder="price"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-10">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Image
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="url"
                            alt="Submit"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-10">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Service Details
                        </label>
                        <textarea
                            type="text"
                            name="Details"
                            placeholder="message"
                            className="flex-1 py-2 textarea textarea-bordered h-24 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="text-right">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold">Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;