export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 lg:pt-14 lg:pb-20">
      <div className="relative z-10 mx-auto px-6 text-center">
        <h1 className="mx-auto max-w-6xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-balance pt-15">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground text-balance">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}