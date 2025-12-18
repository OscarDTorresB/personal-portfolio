import { DATA } from "@/data/portfolio";
import Image from "next/image";

export const LogoBar = () => (
    <section className="mb-32 grayscale opacity-40 hover:opacity-80 transition-opacity">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center border-y py-10">
            {DATA.companies.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                    <Image src={c.logo} alt={c.name} width={32} height={32} />
                    <span className="font-bold text-lg tracking-tight">{c.name}</span>
                </div>
            ))}
        </div>
    </section>
)