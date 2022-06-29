const Age = ({ value, onchange }) => {
  return (
    <>
      <label htmlFor="age">=!=!= Age =!=!=</label>
      <input id="age" type="text" value={value} onChange={onchange} />
    </>
  );
};

export default Age;
