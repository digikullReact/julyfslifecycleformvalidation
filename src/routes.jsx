import App from "./App";

import Lifecycle from "./pages/Lifecycle";
import Lifecycleclass from "./pages/Lifecycleclass";
import Lifecyclefunction from "./pages/Lifecyclefunction";
import Unmountfunction from "./pages/Unmountfunction";
import Validation from "./pages/Validation";

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

        {
          path: "lifecyclefunction",
          element: <Unmountfunction/>,
        },

        {
          path: "validate",
          element: <Validation/>,
        },
       
        
      ],
    },
  ]

  export default RouteArray;