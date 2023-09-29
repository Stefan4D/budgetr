import React, { useState } from 'react';

function ListExpense() {
  const [inputFields, setInputFields] = useState([{ name: '', price: 0 }]);
  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    const newField = { name: '', price: 0 };
    setInputFields([inputFields], newField);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };
  const removeFields = (index) => {
    const data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <div className="row">
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={(input, name)}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="price"
                placeholder="Price"
                value={(input, price)}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
          );
        })}
        <button  type="button"
          className="w-30 bg-slate-500 py-3 text-center text-white"
          onClick={() => removeFields(index)}
        >
          Remove
        </button>
      </form>
      <div>
        <button
          type="button"
          className="w-full bg-slate-500 py-3 text-center text-white"
          onClick={addFields}
        >
          Add More..
        </button>
        <button
          type="button"
          className="w-full bg-slate-500 py-3 text-center text-white"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ListExpense;
