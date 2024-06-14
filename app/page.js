"use client";
import DraggableList from "../app/DraggableList";

const Home = () => {
  return (
    <div className="min-h-screen py-10">
      <main className="max-w-xl mx-auto p-4 ">
        <DraggableList />
      </main>
    </div>
  );
};

export default Home;
