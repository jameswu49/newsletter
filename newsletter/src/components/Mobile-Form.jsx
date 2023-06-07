import check from "../images/list.svg"
import MobileImage from "./Mobile-Image"
import Email from "./Email-Form"

const text = [
    { text: "Product discovery and building what matters." },
    { text: "Measuring to ensure updates are a success." },
    { text: "And much more!" }
]

export default function MobileForm() {
    return (
        <>
            <div className="md:hidden">
                <MobileImage />
                <section className="px-5">
                    <Title />
                    <List />
                    <Email />
                </section>
            </div>
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

