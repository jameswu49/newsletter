import success from "../images/success.svg"

export default function MobileSuccess({ handleMobileSuccess, emailValue }) {
    return (
        <>
            <section className="h-screen">
                <CheckMark emailValue={emailValue} />
                <Button handleMobileSuccess={handleMobileSuccess} />
            </section>
        </>
    )
}

function CheckMark({ emailValue }) {
    return (
        <div className="h-3/4 pt-28">
            <img className="pl-7" src={success} alt="" />
            <h1 className="dark-slate roboto-700 text-5xl pt-10 px-8">Thanks for subscribing!</h1>
            <p className="px-8 pt-7">A confirmation email has been sent to <b>{emailValue}</b>. Please open it and click the button inside to confirm your subscription. </p>
        </div>
    )
}

function Button({ handleMobileSuccess }) {
    return (
        <>
            <div className="h-1/4 flex justify-center items-center">
                <div className="w-[90%]">
                    <button className="w-full rounded-lg dark-slate-bg text-white roboto-700 py-5" onClick={handleMobileSuccess}>Dismiss message</button>
                </div>
            </div>
        </>
    )
}