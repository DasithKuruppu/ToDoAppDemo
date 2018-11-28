import React from "react";
import "./style.css";
const Task = ({
  id = null,
  name = "",
  description = "",
  status = "pending",
  onCheck
}) => {
  const checkEvent=(evt)=>{
      onCheck({id,status:evt.target.checked ? "done": "pending"})
  }
  return (
    <div className={`task ${status}`}>
      <div>
        <div className="taskHeader">{name}</div>
        <div>{description}</div>
      </div>
      <div className="inputControls">
        <label>Done </label>
        <input
          name="taskdone"
          type="checkbox"
          checked={status === "done"}
          onChange={checkEvent}
        />
      </div>
    </div>
  );
};

export default Task;
