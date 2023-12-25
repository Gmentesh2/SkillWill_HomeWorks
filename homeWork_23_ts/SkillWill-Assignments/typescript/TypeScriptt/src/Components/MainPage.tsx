import React from "react";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
return(<div>
<h1>Tasks</h1>
<Outlet />

</div>)
}

export default MainPage;