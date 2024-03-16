// import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = (props) => {
  const changeFilterHandler = (year) => {
    props.onYearChange(year);
  };
  let filteredItem = props.items;
  if (props.year !== null) {
    filteredItem = props.items.filter((item) => {
      // return item.date.split("/")[2] === props.year;
      return item.date.substring(6) === props.year;
    });
  }

  return (
    <>
      <ExpenseFilter onChangeFilter={changeFilterHandler} />
      {filteredItem.length === 0 && 
        <div className="text-center mt-36">
          <div className="text-4xl p-3 rounded-xl bg-gray-800 inline-block">
            No data available for the year <span className="text-red-500">{props.year}</span>. Please select another Year.
          </div>
        </div>
      }

      {filteredItem.length === 1 && 
              filteredItem.map((item) => {
                return (
                  <div
                    key={item.id}
                    style={{ backgroundColor: "#4b4b4b" }}
                    className={`w-3/4 flex items-center justify-between mx-auto my-4 rounded-3xl flex-wrap`}
                  >
                    <ExpenseDate date={item.date} />
                    <ExpenseDetails
                      amount={item.amount}
                      location={item.location}
                      title={item.title}
                    />
                    <p className="text-2xl ml-auto mr-auto">Only single Expense here. Please add more...</p>
                  </div>
                  
                );
              })
            }

      {filteredItem.length > 1 && 
          filteredItem.map((item) => {
            return (
              <div
                key={item.id}
                style={{ backgroundColor: "#4b4b4b" }}
                className={`w-3/4 flex items-center justify-between mx-auto my-4 rounded-3xl flex-wrap`}
              >
                <ExpenseDate date={item.date} />
                <ExpenseDetails
                  amount={item.amount}
                  location={item.location}
                  title={item.title}
                />
              </div>
            );
          })
      }
    </>
  );
};

export default ExpenseItem;
