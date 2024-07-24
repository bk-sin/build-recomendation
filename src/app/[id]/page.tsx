import data from "../../../data.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return data.questions.map((question) => ({
    id: question.id.toString(),
  }));
}

async function getData({ id }: { id: string }) {
  return data.questions.find((question) => question.id === id);
}

export default async function Question({ params }: { params: { id: string } }) {
  const question = await getData({ id: params.id });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-20">
      <h1>{question?.text}</h1>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {question?.options.map((option, idx) => (
          <a
            key={idx}
            href={option.nextQuestionId?.toString()}
            className={`group rounded-lg border-[15px] border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:${
              option?.color || "border-green-500"
            } hover:dark:bg-neutral-800/30`}
            rel="noopener noreferrer"
            style={{
              borderStyle: "groove",
            }}
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
    </div>
  );
}
