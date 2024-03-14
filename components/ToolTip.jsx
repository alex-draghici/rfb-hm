import React, {useState} from "react";

const Tooltip = ({message, children}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative flex flex-col items-center">
            <span className="flex justify-center"
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
            >
                {children}
            </span>

            <div className={`absolute whitespace-nowrap bottom-full flex flex-col items-center ${!show ? "hidden" : ''}`}>
                <span className="relative z-10 p-2 text-xs capitalize leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded">
                    {message}
                </span>

                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"/>
            </div>
        </div>
    );
};

export default Tooltip;
