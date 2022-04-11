function App() {
  const message = "Hello";
  const person = "Jawid";
  const language = "REACT";
  const courseName = "BeCode";

  return (
    <div className="App">
      <h1>{message}</h1>
      <p>
        {person} Learns {language} at {courseName}
      </p>
    </div>
  );
}

export default App;
