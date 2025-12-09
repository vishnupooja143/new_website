
// import EntryForm from "./component/EntryForm";
// import nd_entry_form from "./component/2nd_entry_form";

// function App() {
//   return (
//     <div className="App">
//        <EntryForm />
//        <nd_entry_form />
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import EntryForm from "./component/EntryForm";
// import SecondEntryForm from "./component/SecondEntryForm";
// import Ueeff_ecft from "./component/useeff_ecft";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<EntryForm />} />
//         <Route path="/SecondEntryForm" element={<SecondEntryForm />} />
//         <Route path="/useeff_ecft" element={<Ueeff_ecft />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { useState } from "react";
import { ThemeContext } from "./component/ThemeContext";
import Button from "./component/Button";

function App() {
  const [theme, setTheme] = useState("light"); // state for theme

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
