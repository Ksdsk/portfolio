import { Bungee_Hairline } from 'next/font/google'
const kaushan_script = Bungee_Hairline({weight: "400", subsets: ["latin"]})

export default function MainContent() {
    return (
        <>
            <p className={`${kaushan_script.className} title text-pink-300 text-center`}>
                Hey there!
            </p>
        </>
    )
}