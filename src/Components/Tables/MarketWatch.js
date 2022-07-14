import React, { useState } from 'react'
import AddWatch from './AddWatch'
import Watch from './Watch'

const style = {
  margin: '0 5px',
  height: '24px',
  padding: '0px',
  borderRadius: '5px'
}

function MarketWatch () {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      {/* Begin Page Content */}
      <div class='container-fluid'>
        {/* DataTales Example  */}
        <div class='card shadow mb-4'>
          <div class='card-header py-3'>
            <div class='d-flex flex-wrap'>
              <i
                onClick={() => setModalShow(true)}
                class='fas fa-plus'
                style={{
                  style,
                  paddingTop: '3px',
                  paddingRight: '20px',
                  cursor: 'pointer'
                }}
              ></i>

              <AddWatch show={modalShow} onHide={() => setModalShow(false)} />

              <h6
                class='m-0 font-weight-bold text-primary'
                style={{ style, paddingTop: '3px' }}
              >
                Market Watch
              </h6>
              <select
                class='form-select'
                aria-label='Default select example'
                style={style}
              >
                <option value='1'>Demo</option>
              </select>
              <h6
                class='m-0 font-weight-bold text-primary'
                style={{ style, paddingTop: '3px' }}
              >
                Add Script
              </h6>
              <select
                class='form-select'
                aria-label='Default select example'
                style={style}
              >
                <option value='1'>NSECM</option>
                <option value='1'>NSEFO</option>
                <option value='1'>NSECD</option>
                <option value='1'>MCX</option>
              </select>
              <select
                class='form-select'
                aria-label='Default select example'
                style={style}
              >
                <option value='1'>EQUITY</option>
              </select>
              <div class='form-outline .form-control-sm' style={style}>
                <input
                  type='search'
                  id='form1'
                  class='form-control'
                  placeholder='Search'
                  style={{ height: '24px' }}
                />
              </div>
              <button type='button' class='btn btn-dark' style={style}>
                ADD
              </button>
            </div>
          </div>
          <div class='card-body'>
            <Watch />
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </>
  )
}

export default MarketWatch
