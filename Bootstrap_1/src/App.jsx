import "bootstrap";

function App() {
  return (
    <div className="container mt-5">
    
      <h2 className="text-center mb-4">
        Bootstrap UI
      </h2>
      <div className="card shadow">
        <div className="card-body">

          <h5 className="card-title">
            Student Information
          </h5>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-3">
              <label className = "form-label">UID</label>
              <input
              type="text"
              className = "form-control"
              placeholder="Enter UID"/>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>Select</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>ME</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Year</label>
              <select className = "form-select">
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>

            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default App;
