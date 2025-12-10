"use client";

import React, { useState } from "react";
// import "./Newcrmform.css";
import { toast } from "react-toastify";
import Buttons from "../UiUx/Buttons";
import mainbtnng from "../../../../public/images/mainbtnbg.webp"
function Contactfromfooter({ onCloseModal }) {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        services: ""
    });
    const [thankyou, setthankyou] = useState(false);
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
                setthankyou(true);
                onCloseModal();
            } else {
                toast.error("Submission failed.");
            }
        } catch (err) {
            toast.error("Server error!");
        }
    };

    return (
        <div>
            <div className="p-4 border-2 border-[#6346FA66] bg-white shadow-[0px_0px_13px_7px_#00000038] rounded-3xl">
                <div className="form-wrapper h-max">
                    {thankyou
                        ? <div className="flex flex-col items-center justify-center p-10 bg-purple-50 rounded-xl shadow-md">
                            <h2 className="text-4xl font-bold text-[#6346FA] mb-4">
                                Thank You!
                            </h2>
                            <p className="text-gray-600 text-center mb-6">
                                Your submission has been received successfully.
                            </p>
                        </div>
                        : <form onSubmit={handleSubmit} className="crm-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    name="lastname"
                                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                                <select
                                    name="services"
                                    value={formData.services}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50  sm:col-span-2"
                                    required
                                >
                                    <option value="">Select Cource</option>
                                    <option value="Truck Dispatching">Truck Dispatching</option>
                                    <option value="Truck Dispatching Freight Broker">
                                        Truck Dispatching Freight Broker
                                    </option>
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
                                    <option value="Shopify App Development">
                                        Shopify App Development
                                    </option>
                                    <option value="Shopify Theme Development">
                                        Shopify Theme Development
                                    </option>
                                    <option value="Personality Development">
                                        Personality Development
                                    </option>
                                </select>
                            </div>
                            {/* <div className="buttons text-[25px] flex justify-center  mt-6 mb-6 absolute " >
                                <Buttons btnname="Send it to the Moon" text_color="text-white" />
                            </div> */}
                            <div className="lg:absolute w-full flex justify-center left-0 -bottom-20">
                                <button type="submit" className="border-none outline-none transition-all duration-300 hover:-translate-y-1 text-2xl py-3 px-8 rounded-2xl text-white  bg-cover bg-center cursor-pointer banner_button"
                                    style={{ backgroundImage: `url(${mainbtnng.src})` }}
                                >Enroll Now</button>
                            </div>

                        </form>}
                </div>
            </div>

        </div>
    );
}

export default Contactfromfooter;
