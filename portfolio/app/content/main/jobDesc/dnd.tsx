export default function Dnd() {
    return (
        <div className="text-zinc-300 flex flex-col gap-4">
            <p className="text-3xl font-bold">Department of National Defence - Canada</p>
            <p className="text-xl font-semibold">Software Engineer Intern</p>
            <p className="text-md">Start Date: May 2022</p>
            <p className="text-md">End Date: Dec 2022</p>
            <div className="border w-full"></div>
            <ul className="list-disc ml-10">
                <li className="text-md">Led the development of an API allowlisting data in MAC auth systems to secure student development platforms.</li>
                <li className="text-md">Modernized a full stack application used to authenticate incoming packets with loads up to 120 packets per minute.</li>
                <li className="text-md">Led the engineering of an artificial intelligence network firewall using Python and Scikit to flag malicious packets.</li>
                <li className="text-md">Displayed ownership of the applications by documenting the high-level and low-level design document for the future.</li>
            </ul>
        </div>
    )
}