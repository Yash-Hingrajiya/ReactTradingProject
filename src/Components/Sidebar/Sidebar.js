import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <img type="image/png/ico" src="32x32-fevicon.ico" alt="Logo" />
        </div>
        <div className="sidebar-brand-text mx-3">Trading Campus</div>
      </Link>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Trading</span>
        </Link>
      </li>

      {/* Divider */}
      {/* <hr className="sidebar-divider" /> */}

      {/* Heading */}

      <div className="sidebar-heading">Algo Studio</div>

      {/* Nav Item - Pages Collapse Menu */}

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-random"></i>
          <span>ONE LEG STRATEGY</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item">Advanced Jobber</a>
            <a className="collapse-item">Scaling</a>
            <a className="collapse-item">Scapling</a>
            <a className="collapse-item">Trend Jobber</a>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities2"
          aria-expanded="true"
          aria-controls="collapseUtilities2"
        >
          <i class="fas fa-random"></i>
          <span>TWO LEG STRATEGY</span>
        </a>
        <div
          id="collapseUtilities2"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Spread Trading</h6>
            <a className="collapse-item">Calender Spread</a>
            <a className="collapse-item">Currency Spread</a>
            <a className="collapse-item">Roll Spread</a>
            <a className="collapse-item">Cash Future Arb</a>
            <a className="collapse-item">Mega VS Mini</a>
            <h6 className="collapse-header">Ratio Trading</h6>
            <a className="collapse-item">Pair Trading</a>
            <a className="collapse-item">Long Short Commoditiy</a>
            <a className="collapse-item">Long Short Equity</a>
            <a className="collapse-item">Nifty VS BankNifty</a>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities3"
          aria-expanded="true"
          aria-controls="collapseUtilities3"
        >
          <i class="fas fa-random"></i>
          <span>THREE LEG STRATEGY</span>
        </a>
        <div
          id="collapseUtilities3"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item">THREE LEG STRATEGY</a>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities4"
          aria-expanded="true"
          aria-controls="collapseUtilities4"
        >
          <i class="fas fa-shopping-basket"></i>
          <span>BASKET STRATEGY</span>
        </a>
        <div
          id="collapseUtilities4"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item">Basket BankNifty</a>
            <a class="collapse-item">Basket Nifty</a>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Utilities Collapse Menu */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseUtilities5"
          aria-expanded="true"
          aria-controls="collapseUtilities5"
        >
          <i class="fas fa-sitemap"></i>
          <span>OPTION BOX</span>
        </a>
        <div
          id="collapseUtilities5"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item">Option Market Watch</a>
            <a class="collapse-item">Vol Trading</a>
            <a class="collapse-item">Greek Tracker</a>
            <a class="collapse-item">Two Leg Spread Matrix</a>
            <a class="collapse-item">Three Leg Spread Matrix</a>
            <a class="collapse-item">Four Leg Spread Matrix</a>
            <Link className="collapse-item" to="/optionbox">
              Option Strategy Box
            </Link>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities6"
          aria-expanded="true"
          aria-controls="collapseUtilities6"
        >
          <i class="fas fa-chart-bar"></i>
          <span>TECGNICAL STUDIO</span>
        </a>
        <div
          id="collapseUtilities6"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item">MT Chart</a>
          </div>
        </div>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities7"
          aria-expanded="true"
          aria-controls="collapseUtilities7"
        >
          <i class="fas fa-desktop"></i>
          <span>SCREENERS</span>
        </a>
        <div
          id="collapseUtilities7"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item">Screener</a>
            <a class="collapse-item">Customized Screener</a>
          </div>
        </div>
      </li>

      {/* Divider */}
      {/* <hr className="sidebar-divider" /> */}

      {/* Sidebar Toggler (Sidebar)  */}
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default SideBar;
