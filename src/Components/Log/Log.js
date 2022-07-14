import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBdrSocket,
  getInrSocket,
  getStrategySocket,
  getLog
} from '../../Redux/actions/index'

function Log () {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  //BroadCast Socket Connection Log
  const [bloading, setBLoading] = useState(true)
  const socket = useSelector(state => state.socketReducer.brcst_socket)
  var broadcastlog = ''
  //Intreactive Socket Connection Log
  const [iloading, setILoading] = useState(true)
  const Insocket = useSelector(state => state.socketReducer.intr_socket)
  var Intreactivelog = ''
  //Strategy Socket Connection Log
  const [sloading, setSLoading] = useState(true)
  const Ssocket = useSelector(state => state.socketReducer.strategy_socket)
  const logsData = useSelector(state => state.LogReducer.logs)
  var Strategylog = ''

  const [contractDate, setContractDate] = useState('')

  useEffect(() => {
    dispatch(getBdrSocket())
    dispatch(getLog())
    socket.onopen = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }
      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`
      broadcastlog = (
        <p
          style={{
            color: 'green',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Broadcast Socket Connected'}
        </p>
      )
      setBLoading(broadcastlog)
    }

    socket.onclose = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }
      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`

      broadcastlog = (
        <p
          style={{
            color: 'red',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Broadcast Socket DisConnected'}
        </p>
      )
      setBLoading(broadcastlog)
    }
    socket.onerror = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`
      broadcastlog = (
        <p
          style={{
            color: 'red',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Broadcast Socket DisConnected'}
        </p>
      )
      setBLoading(broadcastlog)
    }

    dispatch(getStrategySocket())
    Ssocket.onopen = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`
      Strategylog = (
        <p
          style={{
            color: 'green',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Strategy Server Connected'}
        </p>
      )
      setSLoading(Strategylog)
    }
    dispatch(getStrategySocket())
    Ssocket.onclose = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`

      Strategylog = (
        <p
          style={{
            color: 'red',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Strategy Server DisConnected'}
        </p>
      )
      setSLoading(Strategylog)
    }

    dispatch(getStrategySocket())
    Ssocket.onerror = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`

      Strategylog = (
        <p
          style={{
            color: 'red',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Strategy Server DisConnected'}
        </p>
      )
      setSLoading(Strategylog)
    }
    dispatch(getInrSocket())
    Insocket.onopen = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`

      Intreactivelog = (
        <p
          style={{
            color: 'green',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Interactive Socket Connected'}
        </p>
      )
      setILoading(Intreactivelog)
    }
    dispatch(getInrSocket())
    Insocket.onclose = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`

      Intreactivelog = (
        <p
          style={{
            color: 'red',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Interactive Socket DisConnected'}
        </p>
      )
      setILoading(Intreactivelog)
    }
    dispatch(getInrSocket())
    Insocket.onerror = e => {
      const data = new Date()
      var options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var date =
        data.toLocaleString('en-US', options) + `.${data.getMilliseconds()}`
      Intreactivelog = (
        <p
          style={{
            color: 'red',
            marginTop: '-10px',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          {date + ' || Interactive Socket DisConnected'}
        </p>
      )
      setILoading(Intreactivelog)
    }
    // if (loading) fetchApiData();
  }, [dispatch])

  // const fetchApiData = () => {
  //   axios
  //     .get(
  //       "https://scriptapi.option.local:6003/api/Script/GetNSEDerivativeScripts"
  //     )
  //     .then((nseDerivativeRes) => {
  //       let nseDerivativeOptionData = [];
  //       for (let i = 0; i < nseDerivativeRes.data.NSE_OPTIDX.length; i++) {
  //         let nse_o = nseDerivativeRes.data.NSE_OPTIDX[i].split(",");
  //         nse_o.push("OPTIDX");
  //         nseDerivativeOptionData.push(nse_o);
  //       }
  //       for (let i = 0; i < nseDerivativeRes.data.NSE_OPTSTK.length; i++) {
  //         let nse_optstk = nseDerivativeRes.data.NSE_OPTSTK[i].split(",");
  //         nse_optstk.push("OPTSTK");

  //         nseDerivativeOptionData.push(nse_optstk);
  //       }
  //     });
  // };

  return (
    <div className='container-fluid'>
      <div class='card shadow mb-4'>
        <div class='card-body'>
          <div class='row'>
            <div class='col-lg-6'>
              <div class='card shadow mb-4'>
                <a
                  href='#collapseCardExample1'
                  class='d-block card-header py-3'
                  data-toggle='collapse'
                  role='button'
                  aria-expanded='true'
                  aria-controls='collapseCardExample1'
                >
                  <h6 class='m-0 font-weight-bold text-success'>Log</h6>
                </a>

                <div class='collapse show' id='collapseCardExample1'>
                  <div class='card-body'>
                    {logsData.length > 0 &&
                      logsData.map((ldata, index) => {
                        ;<p
                          style={{
                            color: 'black',
                            fontWeight: 'bold'
                            // marginTop: "-20px",
                          }}
                          key={index}
                        >
                          {ldata}
                        </p>
                      })}
                    <p>{sloading}</p>
                    <p>{bloading}</p>
                    <p>{iloading}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-6'>
              <div class='card shadow mb-4'>
                <a
                  href='#collapseCardExample'
                  class='d-block card-header py-3'
                  data-toggle='collapse'
                  role='button'
                  aria-expanded='true'
                  aria-controls='collapseCardExample'
                >
                  <h6 class='m-0 font-weight-bold text-danger'>Error</h6>
                </a>

                <div class='collapse show' id='collapseCardExample'>
                  <div class='card-body'>
                    This is a collapsable card example using Bootstrap's built
                    in collapse functionality.{' '}
                    <strong>Click on the card header</strong> to see the card
                    body collapse and expand!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log
