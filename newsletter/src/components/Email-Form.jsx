export default function Email() {
    return (
        <>
            <div className="mr-5 mb-10">
                <Input />
                <Button />
            </div>
        </>
    )
}

function Input() {
    return (
        <>
            <div>
                <h1 className="roboto-700 mt-5">Email address</h1>
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