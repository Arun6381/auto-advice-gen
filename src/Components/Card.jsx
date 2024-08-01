const Card = ({ advice, id }) => {
  return (
    <div className="card">
      <p className="card__title">ADVICE #{id}</p>
      <blockquote className="card__quote">"{advice}"</blockquote>
    </div>
  );
};

export default Card;
