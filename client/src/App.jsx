import Form from "./pages/Home/Form";
import { Home } from "./pages/Home/Home";
import PreviewDrawer from "./pages/Home/PreviewDrawer";
import UpdateForm from "./pages/Home/UpdateForm";

const App = () => {
  return (
    <div className="dark:bg-gray-900 w-full h-screen">
      <Home />
      {/* <PreviewDrawer /> */}
   <UpdateForm />
    </div>
  );
};

export default App;
