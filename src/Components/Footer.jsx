import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="w-full px-[4rem] py-8 bg-colorG text-[#F3EADC] mt-6">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
                <div className="text-center font-normal">
                    &copy; Stayin'It
                </div>
                <ul className="flex sm-down: text-xs items-center gap-y-2 gap-x-8">
                    <li>
                        <div
                            as="a"
                            href="#"
                            className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </div>
                    </li>
                    <li>
                        <div
                            as="a"
                            href="#"
                            className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </div>
                    </li>
                    <li>
                        <div
                            as="a"
                            href="#"
                            className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </div>
                    </li>
                    <li>
                        <div
                            as="a"
                            href="#"
                            className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </div>
                    </li>
                </ul>
            </div>

        </footer>
    );
}