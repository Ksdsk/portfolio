import { Bungee_Hairline } from 'next/font/google'
const kaushan_script = Bungee_Hairline({weight: "400", subsets: ["latin"]})

/**
 *  weight: "400" | "400"[];
    style?: "normal" | "normal"[] | undefined;
    display?: Display | undefined;
    variable?: undefined;
    preload?: boolean | undefined;
    fallback?: string[] | undefined;
    adjustFontFallback?: boolean | undefined;
    subsets?: ("latin" | "latin-ext")[] | undefined;
 */
export default function MainContent() {
    return (
        <>
            <p className={`${kaushan_script.className} title text-pink-300 text-center`}>
                Hey there!
            </p>
        </>
    )
}