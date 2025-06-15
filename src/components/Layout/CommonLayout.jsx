import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";
const CommonLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <Outlet/>
        </div>
      </main>
    </div>
  )
};
export default CommonLayout;