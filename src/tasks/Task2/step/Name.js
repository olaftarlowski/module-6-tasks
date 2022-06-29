const Name = ({ value, onchange }) => {
  return (
    <>
      <label htmlFor="name">=!=!= Name =!=!=</label>
      <input id="name" type="text" value={value} onChange={onchange} />
    </>
  );
};

export default Name;
