import React from "react";

class Navbar extends React.Component {
  // state = {  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <h3
              className="navbar-brand"
              style={{
                fontFamily: "Times New Roman, Times, serif",
                color: "#00ff7b", // Text color (blue)
                fontWeight: "bold", // Make it bold
              }}
            >
              Smart Pill Reminder
            </h3>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search about health"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
