import data from "../../data.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-20">
      <h1>3.25 Build Recomendation</h1>
      <h2>Choose your shit</h2>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {data.questions[0]?.options.map((option, idx) => (
          <a
            key={idx}
            href={option.nextQuestionId?.toString()}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-center">
              {option.text}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        ))}
      </div>
    </main>
  );
}
