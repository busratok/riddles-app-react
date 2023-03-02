import Question from "./Question";

const RiddleAccord = ({ data }) => {
  console.log(data);
  return (
    <div className="row">
      {data.map((item) => {
        return <Question key={item.id} {...item} />;
      })}
    </div>
  );
};

export default RiddleAccord;
