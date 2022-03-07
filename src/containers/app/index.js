import { QueryClient, QueryClientProvider } from "react-query";
import "antd/dist/antd.css";
import "../../index.css";

const queryClient = new QueryClient();

import Landing from "../Landing";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Landing />
  </QueryClientProvider>
);

export default App;
