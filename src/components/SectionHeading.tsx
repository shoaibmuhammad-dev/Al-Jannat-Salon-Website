type Props = {
  id: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({ id, title, intro, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className="reveal max-w-2xl">
      <h2
        id={id}
        className={`text-balance text-3xl leading-tight sm:text-4xl ${dark ? "!text-cream" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-cream/80" : "text-plum-700"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
