import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GoalForm, Spinner, GoalItem } from "../components";
import { getGoals, reset } from "../features/goals/goalSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (user && isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    if (user) {
      dispatch(getGoals());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You don't have any goals yet !!'</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
