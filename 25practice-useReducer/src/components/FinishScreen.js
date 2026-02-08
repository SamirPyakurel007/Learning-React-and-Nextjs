const FinishScreen = ({ points, maxPoints }) => {
  const percent = Math.ceil((points / maxPoints) * 100);
  return (
    <p className="result">
      Your score is <strong>{points}</strong> out of {maxPoints} ({percent}%)
    </p>
  );
};

export default FinishScreen;
