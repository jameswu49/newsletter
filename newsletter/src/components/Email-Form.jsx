import { useState } from "react"

export default function Email() {
    const [valid, setValid] = useState(true)
    const [show, setShow] = useState(false)


    function handleEmailCheck(e) {
        const isValid = e.target.checkValidity()
        setValid(isValid)
    }

    function handleSuccessForm() {
        setShow(!show)
    }

    return (
        <>
            <div className="mr-5 mb-10">
                <Input handleEmailCheck={handleEmailCheck} valid={valid} />
                <Button handleSuccessForm={handleSuccessForm} />
            </div>
        </>
    )
}

function Input({ handleEmailCheck, valid }) {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="roboto-700 mt-5">Email address</h1>
                <span className="pt-5 tomato">{!valid ? 'Valid email required ' : ''}</span>
            </div>
            <div>
                <input className="border-2 rounded-lg pl-6 py-5 w-full mt-2 mb-5"
                    placeholder="email@company.com"
                    type="email"
                    onChange={handleEmailCheck} />
            </div>
        </>
    )
}

function Button({ handleSuccessForm }) {
    return (
        <>
            <div>
                <button className="dark-slate-bg text-white w-full rounded-lg py-5 roboto-700" onClick={handleSuccessForm}>Subscribe to monthly newsletter</button>
            </div>
        </>
    )
}