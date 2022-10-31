import React, { useReducer } from "react";

const reducer = (state, action) => {
    const nextId = 1
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "userInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    case "addUser":
        console.log(state.users);
        return { ...state, users: [...state.users, {id: nextId + 1, userName: action.userName}] }
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: "",
    users: [{
        id: 1,
        userName: "santhsoh"
    }]
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <input
        type="text"
        placeholder="Type here..."
        value={state.userInput}
        onChange={(e) => {
          dispatch({ type: "userInput", payload: e.target.value });
        }}
        style={{
          height: "20px",
          width: "200px",
          outline: "none",
          padding: ".5rem",
        }}
      />
      <button onClick={() => {dispatch({ type: "addUser"})}}>add</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        <h1 style={{
        color: state.color ? "#3357d8" : "#000"
      }}>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: "tgColor" });
          }}
        >
          Color
        </button>
      </div>
      <div style={{
        color: state.color ? "#3357d8" : "#000"
      }}>{state.users.map((user) => {
        return <div key={user.id}>
        <h4>{user.userName}</h4>
        </div>
      })}</div>
    </div>
  );
}

export default Counter;
