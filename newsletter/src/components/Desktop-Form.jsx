import { useState } from "react"
import DesktopSucess from "./Desktop-Success"
import image from "../images/desktop.svg"
import check from "../images/list.svg"

const text = [
    { text: "Product discovery and building what matters." },
    { text: "Measuring to ensure updates are a success." },
    { text: "And much more!" }
]

export default function DesktopForm() {
    const [valid, setValid] = useState(true)
    const [hidden, setHidden] = useState(false)
    const [hideSuccess, setSuccess] = useState(true)
    const [emailValue, setEmailValue] = useState('')

    function handleEmailCheck(e) {
        const isValid = e.target.checkValidity()
        setEmailValue(e.target.value)
        setValid(isValid)
    }


    function handleSubmit(e) {
        e.preventDefault()
        handleSuccessForm()
        e.target.reset()
    }

    function handleSuccessForm() {
        if (valid) {
            setHidden(!hidden)
            setSuccess(!hideSuccess)
        }
    }

    function handleSuccess() {
        setSuccess(!hideSuccess)
        setHidden(false)
    }

    return (
        <>
            <section className="hidden md:flex min-h-screen dark-slate-bg justify-center items-center">
                <div className={`flex bg-white rounded-[2rem] lg:w-[70%] 2xl:w-[60%] ${hidden ? 'hidden' : ''}`}>
                    <div className="w-1/2 px-10">
                        <Title />
                        <List />
                        <Email handleEmailCheck={handleEmailCheck} handleSuccessForm={handleSuccessForm} valid={valid} handleSubmit={handleSubmit} />
                    </div>
                    <Image />
                </div>
                <div className={`flex bg-white rounded-[2rem] w-[30%] ${hideSuccess ? 'hidden' : ''}`}>
                    <DesktopSucess emailValue={emailValue} handleSuccess={handleSuccess} />
                </div>
            </section>
        </>
    )
}

function Title() {
    return (
        <>
            <div className="pt-24">
                <h1 className="text-5xl roboto-700 dark-slate pb-8">Stay updated!</h1>
                <p className="">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
            </div>
        </>
    )
}

function List() {
    return (
        <>
            <div className="pt-5">
                {text.map((element, id) => (
                    <div key={id} className="flex py-2">
                        <img className="pr-5" src={check} alt="" />
                        <p>{element.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

function Email({ handleEmailCheck, handleSuccessForm, valid, handleSubmit }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mr-5 mb-10">
                    <Input handleEmailCheck={handleEmailCheck} valid={valid} />
                </div>
            </form>
        </>
    )
}

function Input({ handleEmailCheck, valid, handleSuccessForm }) {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="roboto-700 pt-5">Email address</h1>
                <span className="pt-5 tomato">{!valid ? 'Valid email required ' : ''}</span>
            </div>
            <div>
                <input className="border-2 rounded-lg pl-6 py-5 w-full mt-2 mb-5"
                    placeholder="email@company.com"
                    type="email"
                    onChange={handleEmailCheck}
                    required
                />
            </div>
            <div className="">
                <input type='submit' value='Subscribe to monthly newsletter' className="dark-slate-bg text-white w-full rounded-lg py-5 roboto-700" onClick={handleSuccessForm}></input>
            </div>
        </>
    )
}

// function Button({ handleSuccessForm }) {
//     return (
//         <>
//             <div className="">
//                 <input type='submit' value='Subscribe to monthly newsletter' className="dark-slate-bg text-white w-full rounded-lg py-5 roboto-700" onClick={handleSuccessForm}></input>
//             </div>
//         </>
//     )
// }

function Image() {
    return (
        <div className="w-1/2 flex items-center justify-center my-8">
            <img src={image} alt="" />
        </div>
    )
}