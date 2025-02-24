import React from "react";

class setTime extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: "100vh", // Full viewport height
            display: "flex", // Flexbox for centering
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            alignContent:"space-evenly",
            backgroundColor: "#ecffdc", // Light background for aesthetics
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Reminder at
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="remainderTime"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default setTime;
