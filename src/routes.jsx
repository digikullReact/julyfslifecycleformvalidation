import App from "./App";

import Lifecycle from "./pages/Lifecycle";
import Lifecycleclass from "./pages/Lifecycleclass";
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
          path: "validate",
          element: <Validation/>,
        },
       
        
      ],
    },
  ]

  export default RouteArray;