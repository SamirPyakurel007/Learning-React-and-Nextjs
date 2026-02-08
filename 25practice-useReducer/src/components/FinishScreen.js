const FinishScreen = ({ points, maxPoints, dispatch }) => {
  const percent = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        Your score is <strong>{points}</strong> out of {maxPoints} ({percent}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
