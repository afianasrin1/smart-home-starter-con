import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./utils/routes";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
{
  /* <div className="flex min-h-screen justify-center items-center">
<h1 className="text-5xl">Welcome to Smart Home Starter Template</h1>
<RouterProvider router={router}></RouterProvider>
</div> */
}
