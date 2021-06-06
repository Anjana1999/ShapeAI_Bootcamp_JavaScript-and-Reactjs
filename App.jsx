import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note className="note" />
      <Note className="note" />
      <Note className="note" />
      <Note className="Note" />
    </div>
  );
}

export default App;
