import { DATA } from "@/data/portfolio";
import { BentoCard } from "../ui/BentoCard";

export const BentoArchitecture = () => (
    <section id="architecture" className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">System <span className="text-indigo-500">Architecture</span></h2>
                <p className="text-muted-foreground text-lg">Key architectural contributions and specialized tooling.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DATA.bentoArchitecture.map((item, i) => <BentoCard key={i} item={item} />)}
        </div>
    </section>
)