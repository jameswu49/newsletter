import success from "../images/success.svg"

export default function DesktopSuccess({ emailValue, handleSuccess }) {
    return (
        <>
            <div className="px-10 py-8">
                <CheckMark />
                <Button />
            </div>
        </>
    )
}

function CheckMark({ emailValue }) {
    return (
        <div className="pt-5">
            <img className="pl-7" src={success} alt="" />
            <h1 className="dark-slate roboto-700 text-5xl pt-10 px-8">Thanks for subscribing!</h1>
            <p className="px-8 pt-7">A confirmation email has been sent to {emailValue}. Please open it and click the button inside to confirm your subscription. </p>
        </div>
    )
}

function Button({ handleSuccess }) {
    return (
        <>
            <div className=" flex justify-center items-center">
                <div className="w-[86%] py-8">
                    <button className="w-full rounded-lg dark-slate-bg text-white roboto-400 py-4" onClick={handleSuccess}>Dismiss message</button>
                </div>
            </div>
        </>
    )
}