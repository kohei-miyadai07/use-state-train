import { useState } from "react";
import "./App.css";
import CountDisplay from "./components/CountDisplay";

function App() {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <>
      <h1>いいねカウンター</h1>
      <CountDisplay
        likeCount={likeCount}
        onHandleLikeCount={() => setLikeCount((likeCount) => likeCount + 1)}
      />
    </>
  );
}

export default App;
