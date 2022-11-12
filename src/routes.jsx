import App from "./App";

import Lifecycle from "./pages/Lifecycle";
import Lifecycleclass from "./pages/Lifecycleclass";

const RouteArray=[
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "lifecycle",
          element: <Lifecycle/>,
        },
        {
          path: "lifecycleclass",
          element: <Lifecycleclass/>,
        },
       
        
      ],
    },
  ]

  export default RouteArray;