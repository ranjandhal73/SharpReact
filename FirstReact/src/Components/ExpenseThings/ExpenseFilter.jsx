

function ExpenseFilter(props) {

const dropdownHandler= (e) =>{
  props.onChangeFilter(e.target.value);
}


  return (
      <div className="flex items-center justify-center">
        <label>Filter by year</label>
        <select className="text-black" onChange={dropdownHandler}>
          <option value="select">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
  );
}

export default ExpenseFilter;
