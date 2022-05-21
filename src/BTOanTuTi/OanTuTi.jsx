import React, { Component } from 'react'
import style from '../assets/styles/components/buble.module.css'
import {connect} from 'react-redux'
class OanTuTi extends Component {
  render() {
      let keyframe = `@keyframes random${Date.now()}{
          0%{top: -50px;}
          25%{top: 100px;}
          50%{top: -50px;}
          75%{top: 100px;}
          100%{top: 0px;}
      }`
      let{tongThang, tongChoi, nguoiChoiHinhAnh,doiThu } = this.props.stateOanTuTi
    return (
      <div className='container-fluid'>
          <style>
              {keyframe}
          </style>
          <div className="row ">
              <div className="col-4 mt-5">
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <button className='btn btn-success'>
                        <div className={`${style['speech-bubble']}`}>
                            <img src={this.props.stateOanTuTi.oanTuTi.find(item => item.ma == true).hinhAnh} alt="..." width={100} height={100}/>
                        </div>
                    </button>
                        <img src="./img/oantuti/player.png" alt="..."  width={250} height={250}/>
                  </div>
                  <div className='d-flex flex-row justify-content-center'>
                        {this.props.stateOanTuTi.oanTuTi.map((value,key) =>{
                            let border = {}
                            if(value.ma){
                                border = {border: "3px solid red"}
                            }
                            return  <button style={border} onClick={() =>{
                                this.props.oanTuTi(value.diem)
                            }}  key={key} className='btn btn-warning mr-3'>
                            <div>
                            <img src={value.hinhAnh} alt="..." width={50} height={50} />
                        </div>
                    </button>
                        })}
                  </div>
               
              </div>
              <div className="text-center col-4 mt-5">
                    <h3 className='text-warning display-3 mb-5'>Game Oẳn tù tì</h3>
                    <h3 className='text-warning display-3 mb-5'>{this.props.stateOanTuTi.ketQua}</h3>
                    <h3 className='text-primary display-4 mt-3'>Số bàn thắng: <span className='text-warning display-4'>{tongThang}</span></h3>
                    <h3 className='text-primary display-4 mt-3'>Số bàn chơi: <span className='text-warning display-4'>{tongChoi}</span></h3>
                    <button onClick={() =>{
                        this.props.playGame()
                    }} className="btn btn-success display-3 mt-5 p-3">Play game</button>
              </div>
              <div className="col-4 mt-5">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                        <button className='btn btn-success'>
                            <div className={`${style['speech-bubble']}`}>
                                <img style={{ zIndex:"1" ,position:"relative" ,animation: `random${Date.now()} 0.5s`}} src ={doiThu.hinhAnh} alt="..." width={100} height={100}/>
                            </div>
                        </button>
                            <img src="./img/oantuti/playerComputer.png" alt="..."  width={250} height={250}/>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return{
        stateOanTuTi : rootReducer.oanTuTiReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        oanTuTi : (maCuoc) =>{
            const action = {
                type : "OAN_TU_TI",
                maCuoc
            }
            dispatch(action)
        },
        playGame : () =>{
            let count = 0;
            let randomComputerItem = setInterval(() =>{
                const action = {
                    type  : "PLAY_GAME"
                }
                dispatch(action)
                count++;
                if(count>=20){
                    clearInterval(randomComputerItem);
                    const action = {
                        type: "END_GAME"
                    }
                    dispatch(action)
                }
            },100)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(OanTuTi)
