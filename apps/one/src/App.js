import React, { Suspense } from "react";
const Boletador = React.lazy(() => import("boletador/App"));

function App() {
  return (
    <>
      <p>
        Ract main application
      </p>
      <Suspense fallback={"loading..."}>
        <Boletador />
      </Suspense>
    </>
  );
}

export default App;
