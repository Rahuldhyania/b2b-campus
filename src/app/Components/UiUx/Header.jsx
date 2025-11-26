import Image from "next/image";
import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.webp"; // अपनी path के अनुसार change करें
import Buttons from "./Buttons";

export default function Header({ text, bgColor = "#6346FA" }) {
    return (
        <nav>
            <div className="flex py-5 justify-around">

                <div className="Logo-img">
                    <Image
                        src={B2BCAMPUSLOGO}
                        width={211}
                        height={46}
                        alt="B2BCampus Logo"
                    />
                </div>

                <div className="menu">
                    <ul className="flex items-center gap-[40px] text-[21px] text-gray-700 font-medium">

                        <li>
                            <a href="#" className="text-purple-600">Home</a>
                        </li>

                        <li className="flex items-center gap-1 cursor-pointer">
                            Courses
                        </li>

                        <li className="cursor-pointer">Placement</li>

                        <li className="cursor-pointer">Our Story</li>

                        <li className="flex items-center gap-1 cursor-pointer">
                            Resources
                        </li>

                        <li className="cursor-pointer">Connect</li>

                    </ul>
                </div>

                <div className="buttons text-[25px] flex justify-center">
                    <Buttons btnname='Register now' text_color={'text-white'} />
                </div>

            </div>
        </nav>
    );
}
