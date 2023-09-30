import "./showTask.css";

export const ShowTask = ({ tasklist, setTasklist, stask, setTask }) => {
  const handleEdit = (id) => {
    const toEdit = tasklist.find((unit) => unit.id === id);
    setTask(toEdit);
  };

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTasklist);
  };

  return (
    <section className="showTask container">
      <div className="card-header">
        <div className="card-title">
          <h1>Tasks</h1>
          <span>{tasklist.length}</span>
        </div>
        <button
          onClick={() => {
            setTasklist([]);
          }}
        >
          Clear All
        </button>
      </div>
      <div className="card-container">
        {tasklist.map((unit) => (
          <div className="card" key={unit.id}>
            <div className="card-content">
              <h2 className="title">{unit.task}</h2>
              <p>{unit.time}</p>
            </div>
            <div className="card-control">
              <button className="btn-edit" onClick={() => handleEdit(unit.id)}>
                edit
              </button>
              <button
                className="btn-delete"
                onClick={() => handleDelete(unit.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
