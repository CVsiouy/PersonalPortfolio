type HeroProps = {
  name: string;
  title: string;
};

export default function Hero({ name, title }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-5xl font-bold">{name}</h1>

      <p className="mt-4 text-xl text-gray-600">
        {title}
      </p>
    </section>
  );
}