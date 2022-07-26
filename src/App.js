import { useState } from "react";
import AddMeetUp from "./components/AddMeetUp";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MeetUpList from "./components/MeetUpList";
import Favorites from "./components/Favorites";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MeetUpList />} />
        <Route path="/addmeetup" element={<AddMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
