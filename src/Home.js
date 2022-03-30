import React from "react";
import app from "./firebase";

export default function Home() {
  return (
    <>
          <h1>Home</h1>
          <button onClick={() => app.auth().signOUt()}>Sign out </button>
    </>
  );
}
