import "../css/mainnav.css";
function Nav() {
  return (
    <div className="mainNav my-5">
      <div className="d-flex justify-content-between px-4 my-4">
        <p>My ToDo List</p>
        <div className="stat">
          <p className="pi">0/6</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
