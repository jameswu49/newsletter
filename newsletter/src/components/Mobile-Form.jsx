import { useState } from "react"
import check from "../images/list.svg"
import MobileImage from "./Mobile-Image"
import MobileSuccess from "./MobileSuccess"

const text = [
    { text: "Product discovery and building what matters." },
    { text: "Measuring to ensure updates are a success." },
    { text: "And much more!" }
]

export default function MobileForm() {
    const [valid, setValid] = useState(true)
    const [hidden, setHidden] = useState(true)

    function handleEmailCheck(e) {
        const isValid = e.target.checkValidity()
        const value = e.target.value
        console.log(value)
        setValid(isValid)
    }

    function handleSuccessForm() {
        if (valid) {
            setHidden(!hidden)
        }
    }

    return (
        <>
            <section className={`md:hidden ${hidden ? '' : 'hidden'}`}>
                <MobileImage />
                <div className="px-5">
                    <Title />
                    <List />
                    <Email handleEmailCheck={handleEmailCheck} handleSuccessForm={handleSuccessForm} valid={valid} />
                </div>
            </section>
            <section className={`md:hidden ${hidden ? 'hidden' : ''}`}>
                <MobileSuccess />
            </section>
        </>
    )
}

function Title() {
    return (
        <>
            <div className="py-10">
                <h1 className="text-5xl roboto-700 dark-slate pb-8">Stay updated!</h1>
                <p>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
            </div>
        </>
    )
}

function List() {
    return (
        <>
            {text.map((element, id) => (
                <div key={id} className="flex pr-16 items-start pb-4">
                    <img className="pr-3" src={check} alt="" />
                    <p>{element.text}</p>
                </div>
            ))}
        </>
    )
}

function Email({ handleEmailCheck, handleSuccessForm, valid }) {
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
