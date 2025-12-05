"use client";

import React, { useState } from "react";
// import "./Newcrmform.css";
import { toast } from "react-toastify";
import Buttons from "../UiUx/Buttons";
function Contactfrom({ onCloseModal }) {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        services: "Shopify Development"
    });
    const [thankyou, setthankyou] = useState(false)
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            __vtrftk: "sid:49a43073c52509949b7ebf78f93d918471f523f3",
            publicid: "6d0d19741a038631a27222bf5cd1d919",
            urlencodeenable: "1",
            name: "B2B website",
            firstname: formData.firstname,
            lastname: formData.lastname,
            mobile: formData.mobile,
            email: formData.email,
            "cf_1188[]": formData.services
        };

        try {
            const res = await fetch("/api/contact-from", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Form submitted successfully!");

                setFormData({
                    firstname: "",
                    lastname: "",
                    mobile: "",
                    email: "",
                    services: "Shopify Development"
                });
                setthankyou(true)
                onCloseModal();
            } else {
                toast.error("Submission failed.");
            }
        } catch (err) {
            toast.error("Server error!");
        }
    };

    return (
        <div className="form-wrapper">
            {
                thankyou
                    ?
                    <div className="flex flex-col items-center justify-center p-10 bg-purple-50 rounded-xl shadow-md">
                        <h2 className="text-3xl font-bold text-[#6346FA] mb-4">Thank You!</h2>
                        <p className="text-gray-600 text-center mb-6">
                            Your submission has been received successfully.
                        </p>
                        {/* <button
                            onClick={onCloseModal} // optional if you want to close modal
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                        >
                            Close
                        </button> */}
                    </div>

                    :
                    <form onSubmit={handleSubmit} className="crm-form">
                        <section className="middle w-full flex justify-center items-center px-4 relative">
                            <div className="max-w-2xl w-full text-center sm:text-left">
                                <h2 className="text-[28px] sm:text-[30px] font-semibold text-[#6346FA] text-center">
                                    Start Your Campus Journey
                                </h2>
                                <p className="text-gray-600 mb-6 sm:mb-4 text-[16px] sm:text-[20px] text-center">
                                    Let us help you with enrollment, courses, and more.
                                </p>

                                {/* Bind form to handleSubmit */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        placeholder="First name"
                                        className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        placeholder="Last name"
                                        className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        required
                                    />

                                    <select
                                        name="services"
                                        value={formData.services}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 sm:col-span-2"
                                        required
                                    >
                                        <option value="">Select Value</option>
                                        <option value="Truck Dispatching">Truck Dispatching</option>
                                        <option value="Truck Dispatching Freight Broker">Truck Dispatching Freight Broker</option>
                                        <option value="AI">AI</option>
                                        <option value="Flutter">IOT</option>
                                        <option value="Web Designing">Web Designing</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Digital marketing">Digital marketing</option>
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Graphic Designing">Graphic Designing</option>
                                        <option value="Wordpress">Wordpress</option>
                                        <option value="Php">Php</option>
                                        <option value="React Js">React Js</option>
                                        <option value="React Native">React Native</option>
                                        <option value="Python">Python</option>
                                        <option value="Mern Stack">Mern Stack</option>
                                        <option value="Shopify App Development">Shopify App Development</option>
                                        <option value="Shopify Theme Development">Shopify Theme Development</option>
                                        <option value="Personality Development">Personality Development</option>

                                    </select>

                                    <div className="buttons text-[25px] flex justify-center mt-6 mb-6 sm:col-span-2">
                                        <Buttons btnname="Submit" text_color="text-white" type="submit" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </form>
            }

        </div>
    );
}

export default Contactfrom;