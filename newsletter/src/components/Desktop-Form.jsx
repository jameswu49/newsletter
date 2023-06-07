import image from "../images/desktop.svg"
import check from "../images/list.svg"

const text = [
    { text: "Product discovery and building what matters." },
    { text: "Measuring to ensure updates are a success." },
    { text: "And much more!" }
]

export default function DesktopForm() {
    return (
        <>
            <section className="hidden md:flex min-h-screen dark-slate-bg justify-center items-center">
                <div className="flex bg-white rounded-[2rem] lg:w-[80%] 2xl:w-[60%]">
                    <div className="w-1/2 px-20">
                        <Title />
                        <List />
                        <Input />
                        <Button />
                    </div>
                    <Image />
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

function Input() {
    return (
        <>
            <div>
                <h1 className="roboto-700 pt-5">Email address</h1>
                <input className="border-2 rounded-lg pl-4 py-5 w-full mt-2 mb-5" placeholder="email@company.com" type="text" />
            </div>
        </>
    )
}

function Button() {
    return (
        <>
            <div className="">
                <button className="dark-slate-bg text-white w-full rounded-lg py-5 roboto-700">Subscribe to monthly newsletter</button>
            </div>
        </>
    )
}

function Image() {
    return (
        <div className="w-1/2 flex items-center justify-center my-8">
            <img src={image} alt="" />
        </div>
    )
}