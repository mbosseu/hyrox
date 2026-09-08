import Image from "next/image";

export function PageHero({
  kicker,
  title,
  text,
  image,
  alt,
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate min-h-[52vh] overflow-hidden bg-ink text-white">
      <Image src={image} alt={alt} fill className="object-cover opacity-45" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="container-page relative py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{kicker}</p>
        <h1 className="mt-3 max-w-4xl text-5xl md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">{text}</p>
      </div>
    </section>
  );
}
