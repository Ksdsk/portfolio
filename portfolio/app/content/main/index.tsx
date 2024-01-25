import About from "./about";
import Work from "./work";
import Hero from "./hero";

export default function MainContent() {
    return (
        <div>
            <div className="flex flex-col gap-40 pb-20">
                <Hero/>
                <About/>
                <Work/>
            </div>
        </div>
    )
}