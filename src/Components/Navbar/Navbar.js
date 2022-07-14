import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBdrSocket,
  getInrSocket,
  getStrategySocket,
} from "../../Redux/actions";
import { TransCode } from "../../TransCode/TransCode";

function Navbar() {
  const dispatch = useDispatch();

  const [bSocketcolor, setBrodSocketColor] = useState("red");
  const [ISocketcolor, setIntsocketColor] = useState("red");
  const [sSocketColor, setStrategyColor] = useState("red");

  const [niftyBankIndex, setNiftyBankIndex] = useState(0.0);
  const [niftyBankDiff, setNiftyBankDiff] = useState(0.0);
  const [niftyBankPer, setNiftyBankPer] = useState(0.0);

  const [nifty50Index, setNifty50Index] = useState(0.0);
  const [nifty50Diff, setNifty50Diff] = useState(0.0);
  const [nifty50Per, setNifty50Per] = useState(0.0);

  const [n_color, setNColor] = useState("");
  const [f_color, setFColor] = useState("");

  const socket = useSelector((state) => state.socketReducer.brcst_socket);
  const Ssocket = useSelector((state) => state.socketReducer.strategy_socket);
  const Insocket = useSelector((state) => state.socketReducer.intr_socket);

  useEffect(() => {
    dispatch(getBdrSocket());
    dispatch(getStrategySocket());
    dispatch(getInrSocket);

    if (socket.readyState === WebSocket.OPEN) {
      setBrodSocketColor("green");
    }
    if (socket.readyState === WebSocket.CLOSED) {
      setBrodSocketColor("red");
    }

    if (Ssocket.readyState === WebSocket.OPEN) {
      setStrategyColor("green");
    }
    if (Ssocket.readyState === WebSocket.CLOSED) {
      setStrategyColor("red");
    }

    if (Insocket.readyState === WebSocket.OPEN) {
      setIntsocketColor("green");
    }
    if (Insocket.readyState === WebSocket.CLOSED) {
      setIntsocketColor("red");
    }
  }, [socket.readyState, Ssocket.readyState, Insocket.readyState, dispatch]);

  if (socket !== undefined || socket != null) {
    socket.onmessage = (e) => {
      const brdData = e.data.split("#");
      // console.log(brdData);
      processBroadCast(brdData);
    };
  }

  const processBroadCast = (data) => {
    switch (data[0]) {
      case TransCode.IndexUpdate:
        if (data[3] === "NIFTY BANK" && data[4]) {
          if (niftyBankIndex === 0.0) {
            setNiftyBankIndex(parseFloat(data[4]));
            setNiftyBankDiff(parseFloat(data[4]) - parseFloat(data[5]));
            setNiftyBankPer(parseFloat(data[6]));
            break;
          } else if (niftyBankIndex !== parseFloat(data[4])) {
            setNiftyBankIndex(parseFloat(data[4]));
            setNiftyBankIndex(parseFloat(data[4]));
            setNiftyBankDiff(parseFloat(data[4]) - parseFloat(data[5]));
            setNiftyBankPer(parseFloat(data[6]));
            if (niftyBankDiff != 0.0 && data[6]) {
              if (parseFloat(data[4]) - parseFloat(data[5]) < niftyBankDiff) {
                setNColor("red");
              } else {
                setNColor("green");
              }
            }
            break;
          } else {
            break;
          }
        } else if (data[3] === "NIFTY 50") {
          if (nifty50Index === 0.0) {
            setNifty50Index(parseFloat(data[4]));
            setNifty50Diff(parseFloat(data[4]) - parseFloat(data[5]));
            setNifty50Per(parseFloat(data[6]));
            break;
          } else if (nifty50Index !== parseFloat(data[4])) {
            setNifty50Index(parseFloat(data[4]));
            setNifty50Index(parseFloat(data[4]));
            setNifty50Diff(parseFloat(data[4]) - parseFloat(data[5]));
            setNifty50Per(parseFloat(data[6]));
            if (nifty50Diff != 0.0 && data[6]) {
              if (parseFloat(data[4] - parseFloat(data[5])) < nifty50Diff) {
                setFColor("red");
              } else {
                setFColor("green");
              }
            }
            break;
          } else {
            break;
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Topbar */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* Topbar Navbar */}

        <ul className="navbar-nav ml-auto">
          <form class="d-none d-sm-inline-block">
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle">
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Nifty 50 (<i class="fas fa-rupee-sign"></i>)
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {nifty50Per.toFixed(2) > 0 ? (
                            <span style={{ color: "green" }}>
                              {nifty50Index.toFixed(2)}&nbsp;
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              {nifty50Index.toFixed(2)}&nbsp;
                            </span>
                          )}

                          {nifty50Per.toFixed(2) < 0 ? (
                            <i
                              style={{ color: "red" }}
                              class="fas fa-angle-down text-300"
                            ></i>
                          ) : (
                            <i
                              style={{ color: "green" }}
                              class="fas fa-angle-up text-300"
                            ></i>
                          )}

                          <span style={{ color: f_color }}>
                            {nifty50Diff.toFixed(2)}
                          </span>
                          {nifty50Per.toFixed(2) > 0 ? (
                            <span style={{ color: "green" }}>
                              ({nifty50Per.toFixed(2)}%)
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              ({nifty50Per.toFixed(2)}%)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </form>

          <form class="d-none d-sm-inline-block">
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle">
                {" "}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          NiftyBank (<i class="fas fa-rupee-sign"></i>)
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {niftyBankPer.toFixed(2) > 0 ? (
                            <span style={{ color: "green" }}>
                              {niftyBankIndex.toFixed(2)}&nbsp;
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              {niftyBankIndex.toFixed(2)}&nbsp;
                            </span>
                          )}

                          {niftyBankPer.toFixed(2) < 0 ? (
                            <i
                              style={{ color: "red" }}
                              class="fas fa-angle-down text-300"
                            ></i>
                          ) : (
                            <i
                              style={{ color: "green" }}
                              class="fas fa-angle-up text-300"
                            ></i>
                          )}

                          <span style={{ color: n_color }}>
                            {niftyBankDiff.toFixed(2)}
                          </span>

                          {niftyBankPer.toFixed(2) > 0 ? (
                            <span style={{ color: "green" }}>
                              ({niftyBankPer.toFixed(2)}%)
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              ({niftyBankPer.toFixed(2)}%)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </form>

          <form class="d-none d-sm-inline-block">
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle">
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total M2M (<i class="fas fa-rupee-sign"></i>)
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          -17180161.15
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </form>

          {/* Nav Item - Search Dropdown (Visible Only XS) */}

          {/* Nav Item - Alerts */}

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-rupee-sign"></i>
            </a>
            {/* Dropdown - Alerts */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Margin Details</h6>
              <a className="dropdown-item d-flex align-items-center">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <span className="font-weight-bold">
                    Legder Balance :{" "}
                    <span style={{ color: "red" }}>123456</span>
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>Cash Released : 1109975174.10000000000</div>
              </a>
              <a className="dropdown-item d-flex align-items-center">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>Utilized Margin : 782335001.10000000000</div>
              </a>
              <a className="dropdown-item d-flex align-items-center">
                <div className="mr-3">
                  <div className="icon-circle bg-info">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>Available Margin : 0</div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Margin Details
              </a>
            </div>
          </li>

          {/* Nav Item - Messages */}

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
            </a>
            {/* Dropdown - Messages */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">User information</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Name :</div>
                  <div className="small text-gray-500">
                    <span style={{ color: "red" }}>Yash Hingrajia</span>
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="font-weight-bold">
                  <div className="text-truncate">Email Id :</div>
                  <div className="small text-gray-500">
                    yashhingrajiya2001@gmail.com
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="font-weight-bold">
                  <div className="text-truncate">Mobile Number : </div>
                  <div className="small text-gray-500">9723185650</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="font-weight-bold">
                  <div className="text-truncate">PAN Number :</div>
                  <div className="small text-gray-500">ABCDE1234F</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="font-weight-bold">
                  <div className="text-truncate">Address : </div>
                  <div className="small text-gray-500"></div>
                </div>
              </a>
              <a className="dropdown-item text-center small text-gray-500">
                TradingCampus-W 2.0.0.1
              </a>
            </div>
          </li>

          {/* Nav Item - Intreactive Socket Connection */}

          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle">
              <span style={{ color: ISocketcolor }}>
                <i className="fas fa-share"></i>
              </span>
            </a>
          </li>

          {/* Nav Item - BroadCast Socket Connection */}

          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle">
              <span style={{ color: bSocketcolor }}>
                <i className="fas fa-wifi"></i>
              </span>
            </a>
          </li>

          {/* Nav Item - Strategy Active Deactive */}

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-play"></i>
            </a>
            {/* Dropdown - Active Deactive */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Active Deactive Strategy</h6>
              <a className="dropdown-item d-flex align-items-center">
                <div>
                  Activated Strategy : <button>Deactive All</button>
                </div>
              </a>
            </div>
          </li>

          {/* <div className="topbar-divider d-none d-sm-block"></div> */}

          {/* Nav Item - User Information */}

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Yash Hingrajiya
              </span>
              <img
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </a>
            {/* Dropdown - User Information  */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-file fa-sm fa-fw mr-2 text-gray-400"></i>
                Reports
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
