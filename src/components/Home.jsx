import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="background">
      <div className="container mx-auto " >
        <div className=" py-50 sm:py-32 center-box">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center " >
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Save Your Thoughts
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                Welcome to NoteBook
              </p>
              <Link class="mt-2 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" to="/Login"> Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
