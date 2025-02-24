import React from "react";
class MedicineInput extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div
          style={{
            height: "100vh", // Full viewport height
            display: "flex", // Flexbox for centering
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
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
                  <h3 style={{ fontFamily: "'Pacifico', cursive" }}>
                    Please enter the medicine name:
                  </h3>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="medicName"
                  aria-describedby="medicineName"
                  placeholder="Medicine name is written in the back of the wrapper"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#355E3B",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontFamily: "Times New Roman, Times, serif",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default MedicineInput;
