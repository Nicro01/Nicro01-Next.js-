export default function Home() {
  return (
    <main className="bg-[#ffd249]">
      <div className="grid select-none grid-cols-2 gap-4 px-5 py-10 sm:mx-auto sm:max-w-[95%] sm:grid-cols-4 sm:items-start sm:gap-6">
        <div className="card-shadow col-span-2 flex flex-col justify-between rounded-lg bg-[#FFF6E9] px-6 py-8">
          <div>
            <h1 className="righteous mb-6 flex items-center text-5xl font-semibold max-sm:flex-col max-sm:gap-2 max-sm:text-center sm:mb-4">
              Welcome to
            </h1>

            <p className="poppins text-xl font-medium max-sm:text-justify">
              Explore insights and experiences in full stack web development.
              Here, I share detailed articles, tutorials, and tips on various
              aspects of web development, including front-end and back-end
              technologies, best practices, and personal experiences from
              real-world projects. Whether you&apos;re a beginner looking to get
              started or an experienced developer seeking advanced techniques,
              you&apos;ll find valuable content to enhance your skills and
              knowledge.
            </p>
          </div>
        </div>

        <div className="card-shadow col-span-2 flex flex-col justify-between gap-6 rounded-lg bg-[#80C4E9] px-6 py-8 sm:col-span-1 sm:gap-5">
          <h1 className="righteous text-3xl font-semibold sm:text-5xl">
            Nicro01 is build with
          </h1>

          <div className="flex flex-wrap gap-2">
            <div className="tag-shadow rounded-full border-2 border-black bg-white px-4 py-1 text-center">
              Next.JS
            </div>
            <div className="tag-shadow rounded-full border-2 border-black bg-white px-4 py-1 text-center">
              React
            </div>
            <div className="tag-shadow rounded-full border-2 border-black bg-white px-4 py-1 text-center">
              Tailwind CSS
            </div>
          </div>
          <button className="button-shadow border-2 border-black bg-white px-2 py-2 sm:self-start sm:px-6">
            <a href="/blog">See all technologies</a>
          </button>
        </div>

        <div className="card-shadow col-span-2 flex flex-col justify-between gap-5 rounded-lg bg-[#604CC3] px-6 py-8 sm:col-span-1">
          <h1 className="righteous text-3xl font-semibold sm:text-5xl">
            What will you find here?
          </h1>
          <p className="poppins text-lg font-medium max-sm:text-justify sm:text-xl">
            Here you will find articles about web development, programming, and
            other topics.
          </p>
        </div>

        <div className="card-shadow col-span-2 rounded-lg bg-[#36BA98] px-6 py-8 sm:col-span-4">
          <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
            <h1 className="righteous text-5xl font-semibold">
              Recent Articles
            </h1>

            <button className="button-shadow rounded-lg border-2 border-black bg-white px-6 py-2 max-sm:mb-5 max-sm:w-full">
              <a href="/blog">See all articles</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
