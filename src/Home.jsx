import React, { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Each card will have its own like/done/expand/qty state
  const [cards, setCards] = useState([
    { liked: false, done: false, expanded: false, qty: 1 },
    { liked: false, done: false, expanded: false, qty: 1 },
    { liked: false, done: false, expanded: false, qty: 1 }
  ]);

  const toggle = (index, key) => {
    const updated = [...cards];
    updated[index][key] = !updated[index][key];
    setCards(updated);
  };

  const changeQty = (index, amount) => {
    const updated = [...cards];
    updated[index].qty = Math.max(1, updated[index].qty + amount);
    setCards(updated);
  };

  const handleSubmit = () => {
    alert('All data submitted successfully!');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  const handleClear = () => {
    setCards([
      { liked: false, done: false, expanded: false, qty: 1 },
      { liked: false, done: false, expanded: false, qty: 1 },
      { liked: false, done: false, expanded: false, qty: 1 }
    ]);
  };

  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete all data?')) {
      handleClear();
    }
  };

  const handleCardSubmit = (index) => {
    alert(`Card ${index + 1} submitted successfully!`);
  };

  const handleCardClear = (index) => {
    const updated = [...cards];
    updated[index] = { liked: false, done: false, expanded: false, qty: 1 };
    setCards(updated);
  };

  const handleCardDelete = (index) => {
    if (window.confirm(`Delete all data from Card ${index + 1}?`)) {
      handleCardClear(index);
    }
  };

  return (
    <div className={dark ? "text-center bg-dark text-white p-4 min-vh-100" : "text-center p-4 min-vh-100"}>

      {/* THEME TOGGLE */}
      <button className="btn btn-secondary mb-4" onClick={() => setDark(!dark)}>
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h1 className="mb-3">Namaste</h1>
      <h1 className="mb-3">Welcome to Silver Oak University</h1>
      <p className="lead mb-4">This is a component. Use this area to describe your app.</p>

      <div className="row g-4">

        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="card h-100 p-4">
            <h5>Add Expense</h5>
            <p>Record your daily expenses with category and amount detail.</p>

            {/* LIKE */}
            <button
              className="btn btn-outline-danger me-2"
              onClick={() => toggle(0, "liked")}
            >
              ❤️ {cards[0].liked ? "Liked" : "Like"}
            </button>

            {/* DONE */}
            <button
              className="btn btn-outline-success me-2"
              onClick={() => toggle(0, "done")}
            >
              {cards[0].done ? "Completed ✔️" : "Mark as Done"}
            </button>

            {/* EXPAND */}
            <button
              className="btn btn-outline-primary"
              onClick={() => toggle(0, "expanded")}
            >
              {cards[0].expanded ? "Hide ▲" : "Show ▼"}
            </button>

            {/* EXPANDED DETAILS */}
            {cards[0].expanded && (
              <div className="mt-3">
                <p>Extra information about this card goes here.</p>

                {/* QUANTITY */}
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn btn-warning" onClick={() => changeQty(0, -1)}>-</button>
                  <h5>{cards[0].qty}</h5>
                  <button className="btn btn-info" onClick={() => changeQty(0, 1)}>+</button>
                </div>
              </div>
            )}

            <a href="#" className="btn btn-primary mt-3">Expense</a>
            
            {/* CARD ACTION BUTTONS */}
            <div className="card-action-buttons mt-3">
              <button className="btn btn-sm btn-success" onClick={() => handleCardSubmit(0)}>Submit</button>
              <button className="btn btn-sm btn-warning" onClick={() => handleCardClear(0)}>Clear</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleCardDelete(0)}>Delete</button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="card h-100 p-4">
            <h5>Budget plan</h5>
            <p>Set monthly budget and track your spending limits.</p>

            {/* LIKE */}
            <button
              className="btn btn-outline-danger me-2"
              onClick={() => toggle(1, "liked")}
            >
              ❤️ {cards[1].liked ? "Liked" : "Like"}
            </button>

            {/* DONE */}
            <button
              className="btn btn-outline-success me-2"
              onClick={() => toggle(1, "done")}
            >
              {cards[1].done ? "Completed ✔️" : "Mark as Done"}
            </button>

            {/* EXPAND */}
            <button
              className="btn btn-outline-primary"
              onClick={() => toggle(1, "expanded")}
            >
              {cards[1].expanded ? "Hide ▲" : "Show ▼"}
            </button>

            {/* EXPANDED DETAILS */}
            {cards[1].expanded && (
              <div className="mt-3">
                <p>More details about your budget.</p>

                {/* QUANTITY */}
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn btn-warning" onClick={() => changeQty(1, -1)}>-</button>
                  <h5>{cards[1].qty}</h5>
                  <button className="btn btn-info" onClick={() => changeQty(1, 1)}>+</button>
                </div>
              </div>
            )}

            <a href="#" className="btn btn-primary mt-3">Budget</a>
            
            {/* CARD ACTION BUTTONS */}
            <div className="card-action-buttons mt-3">
              <button className="btn btn-sm btn-success" onClick={() => handleCardSubmit(1)}>Submit</button>
              <button className="btn btn-sm btn-warning" onClick={() => handleCardClear(1)}>Clear</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleCardDelete(1)}>Delete</button>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4">
          <div className="card h-100 p-4">
            <h5>View History</h5>
            <p>Check all your past transactions and expense records.</p>

            {/* LIKE */}
            <button
              className="btn btn-outline-danger me-2"
              onClick={() => toggle(2, "liked")}
            >
              ❤️ {cards[2].liked ? "Liked" : "Like"}
            </button>

            {/* DONE */}
            <button
              className="btn btn-outline-success me-2"
              onClick={() => toggle(2, "done")}
            >
              {cards[2].done ? "Completed ✔️" : "Mark as Done"}
            </button>

            {/* EXPAND */}
            <button
              className="btn btn-outline-primary"
              onClick={() => toggle(2, "expanded")}
            >
              {cards[2].expanded ? "Hide ▲" : "Show ▼"}
            </button>

            {/* EXPANDED DETAILS */}
            {cards[2].expanded && (
              <div className="mt-3">
                <p>Your full history details appear here.</p>

                {/* QUANTITY */}
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn btn-warning" onClick={() => changeQty(2, -1)}>-</button>
                  <h5>{cards[2].qty}</h5>
                  <button className="btn btn-info" onClick={() => changeQty(2, 1)}>+</button>
                </div>
              </div>
            )}

            <a href="#" className="btn btn-primary mt-3">History</a>
            
            {/* CARD ACTION BUTTONS */}
            <div className="card-action-buttons mt-3">
              <button className="btn btn-sm btn-success" onClick={() => handleCardSubmit(2)}>Submit</button>
              <button className="btn btn-sm btn-warning" onClick={() => handleCardClear(2)}>Clear</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleCardDelete(2)}>Delete</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
