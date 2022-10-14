import { Outlet } from "react-router-dom";

function App() {
  const local = () => {
    const check = localStorage.getItem("productCart");
    if (check === null) {
      const productCart = []
      localStorage.setItem("productCart",JSON.stringify(productCart))
    }else {
      return
    }
  };

  return (
    <div>
      {local()}
      <Outlet />
    </div>
  );
}

export default App;
