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
              <Link to="/Login"> Takle me Home</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
