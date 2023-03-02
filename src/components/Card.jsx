const Card = ({ id, question, answer, icon, handleToggle }) => {
  return (
    <div className="card-group">
      <div className="card">
        <div className="ques-answer">
          <h3>
            {id}.{question}
          </h3>
          <button onClick={handleToggle}>{icon}</button>
        </div>
        {answer && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default Card;
