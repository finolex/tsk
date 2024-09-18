// @ts-nocheck
import { useState, useEffect } from "react";
import * as db from "./utils/db";
import "./App.css";
import { AboutModal } from "./components/AboutModal";
import { ListItem } from "./components/ListItem";
import { Task } from "./utils/types";

function Home() {
  console.log("Home");

  const { tasks, addTask, deleteTask, updateTask, loading } = db.useTasks();
  const [selectedTask, setSelectedTask] = useState({});
  const [newInput, setNewInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi :) :)", newInput);
    if (newInput.trim() === "") {
      // Check if the input is empty or contains only whitespace
      alert('Please fill out this field');
      return;
    }
    addTask(newInput);
    setNewInput("");
  };

  return (
    <section className="task-home p-2 bg-grey-900 w-screen h-screen lg:max-w-full">
      <div className="navbar bg-base-100 rounded-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"
            onClick={() => { window.modal_2.showModal(); }}
          ><img className="w-8 h-8 mr-2" src='tsk-logo.png' />tsk.</a>
        </div>
      </div>

      <div className="p-0 ">
        <form
          onSubmit={handleSubmit}
          className="mt-10 join task-input flex justify-center"
        >
          <input
            type="text"
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
            placeholder="I want to..."
            className="join-item input input-bordered w-full max-w-xs"
            required
          />
          <input
            className="join-item submit btn bg-violet-600 font-bold text-slate-300 hover:bg-violet-400 hover:text-slate-700"
            type="submit"
            onClick={handleSubmit}
          />
        </form>

        <div className="overflow-x-auto mt-10 flex justify-center ">
          <table className="table w-full max-w-4xl">
            <tbody>
              {tasks.length == 0 && <div>
                <p className="text-lg font-bold text-center text-slate-100">No tasks yet.</p>
                <p className="no-task-blurb text-sm font-serif text-center text-slate-100">which is <em>totally</em> fine. its okay to do nothing. you deserve a rest day.</p>
                <p className="no-task-blurb text-sm font-serif text-center text-slate-100">but also, you can add a task above.</p>

              </div>
              }

              {tasks.map((task: Task) => {
                return (
                  <button
                    key={task.id}
                    className="w-full mb-4 p-1"
                  >
                    <ListItem
                      key={task.id}
                      task={task}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                    />
                  </button>
                );
              })}
            </tbody>
          </table>
        </div>

        <dialog id="modal_2" className="modal">
          <AboutModal />
        </dialog>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
