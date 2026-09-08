import Image from "next/image";

export function PageHero({
  kicker,
  title,
  text,
  image,
  alt,
  priority = true,
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate min-h-[44vh] overflow-hidden bg-ink text-white sm:min-h-[52vh]">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover opacity-45"
        sizes="100vw"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="container-page relative py-14 sm:py-20 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{kicker}</p>
        <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/85 sm:mt-5 sm:text-lg">{text}</p>
      </div>
    </section>
  );
}
