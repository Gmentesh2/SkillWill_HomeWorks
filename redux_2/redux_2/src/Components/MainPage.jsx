import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
return(<div>
<h1>Tasks</h1>
<Outlet />

</div>)
}

export default MainPage;