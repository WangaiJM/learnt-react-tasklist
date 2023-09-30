import "./addTask.css";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((unit) =>
        unit.id === task.id
          ? {
              id: task.id,
              task: task.task,
              time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : unit
      );

      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getMilliseconds(),
        task: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };

      setTasklist([...tasklist, newTask]);

      setTask({});
    }
  };

  return (
    <section className="addTask container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add Task"
          autoComplete="off"
          maxLength={25}
          value={task.task || ""}
          onChange={(e) => setTask({ ...task, task: e.target.value })}
        />
        <button type="submit">{!task.id ? "Add" : "Update"}</button>
      </form>
    </section>
  );
};
