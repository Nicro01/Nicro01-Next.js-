import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white  select-none">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium text-[#ffd249] ">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
              We lost this page
            </h1>
            <p className="mt-4 text-gray-500 ">
              We searched high and low, but couldn&apos;t find what you&apos;re
              looking for.Let&apos;s find a better place for you to go.
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link
                href="/"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg  gap-x-2 sm:w-auto  hover:bg-gray-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </Link>
            </div>
          </div>

          <div className="grid w-full max-w-3xl grid-cols-1 gap-8 mx-auto mt-8">
            <div className="p-6 rounded-lg bg-neutral-50 ">
              <span className="text-gray-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>

              <h3 className="mt-6 font-medium text-gray-700 text-3xl">Blog</h3>

              <p className="mt-2 text-gray-500  text-xl">
                Read the latest posts on our blog.
              </p>

              <a
                href="#"
                className="inline-flex items-center mt-4 text-sm text-[#ffd249] gap-x-2  hover:underline"
              >
                <span className="text-lg">View lastest posts</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
