import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      toast.success("Added goal seccessfully");
      dispatch(createGoal({ text: text }));
      setText("");
    } else {
      toast.error("Please add a goal");
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            <input
              type="text"
              id="text"
              value={text}
              placeholder="What's your goals?"
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
