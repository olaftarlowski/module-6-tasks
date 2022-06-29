const Interests = ({ value, onchange }) => {
  return (
    <>
      <label htmlFor="interests">=!=!= Interests =!=!=</label>
      <input id="interests" type="text" value={value} onChange={onchange} />
    </>
  );
};

export default Interests;
