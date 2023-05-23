import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import ModeContext from "../context/mode-context";

export default function Error() {
    const ctx = useContext(ModeContext)
    return (
        <React.Fragment>
            <Navbar />
            <div className={`${ctx.mode === 'dark' && ' bg-gradient-to-b from-[#1a2338] via-[#1b3576] to-[#1a2338]'} min-h-screen`}>
                <div className="text-center py-4">
                    <h1 className={`text-3xl font-bold ${ctx.mode === 'dark' && 'text-white'}`}>An Error Occurred</h1>
                    <p className="text-[#6366F1]">Something went wrong!</p>
                </div>
            </div>
        </React.Fragment>
    );
}
