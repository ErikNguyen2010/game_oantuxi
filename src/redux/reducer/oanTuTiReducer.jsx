const stateDefault = {
  doiThu: { hinhAnh: "./img/oantuti/bua.png", diem: "bao" },
  tongThang: 0,
  tongChoi: 0,
  ketQua: "thua rùi",
  oanTuTi: [
    { hinhAnh: "./img/oantuti/bao.png", diem: "bao", ma: true },
    { hinhAnh: "./img/oantuti/keo.png", diem: "keo", ma: false },
    { hinhAnh: "./img/oantuti/bua.png", diem: "bua", ma: false },
  ],
};

export const oanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "OAN_TU_TI": {
      let newMang = [...state.oanTuTi];
      newMang = newMang.map((item, index) => {
        if (item.diem == action.maCuoc) {
          return { ...item, ma: true };
        }
        return { ...item, ma: false };
      });
      state.oanTuTi = newMang;
      return { ...state };
    }
    case "PLAY_GAME": {
      let randomSo = Math.floor(Math.random() * 3);
      let soNgauNhien = state.oanTuTi[randomSo];
      console.log(soNgauNhien);
      state.doiThu = { ...soNgauNhien };
      return { ...state };
    }
    case "END_GAME": {
      let player = state.oanTuTi.find((item) => item.ma == true);
      let computer = state.doiThu;
      switch (player.diem) {
        case "keo":
          {
            if (computer.diem == "bao") {
              state.ketQua = "thang rồi ";
              state.tongThang += 1;
            } else if (computer.diem == "keo") {
              state.ketQua = "hòa nha";
            } else if (computer.diem == "bua") {
              state.ketQua = "thua rồi";
            }
          }
          break;
        case "bao":
          {
            if (computer.diem == "bao") {
              state.ketQua = "hòa nha ";
            } else if (computer.diem == "keo") {
              state.ketQua = "thua rồi";
            } else if (computer.diem == "bua") {
              state.ketQua = "thắng rồi";
              state.tongThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (computer.diem == "bao") {
              state.ketQua = "thua rồi ";
            } else if (computer.diem == "keo") {
              state.ketQua = "thắng rồi";
              state.tongThang += 1;
            } else if (computer.diem == "bua") {
              state.ketQua = "hòa nha";
            }
          }
          break;
      }
      state.tongChoi += 1;
      return { ...state };
    }
    default:
      return state;
  }
};

// let computer = state.doiThu;
// for(let index of state.oanTuTi){
//     switch(index.diem){
//         case "keo" :{
//             console.log(index.diem);
//             if(computer.diem == "bao"){
//                 state.ketQua = "thang rùi "
//                 state.tongThang += 1
//             }else if(computer.diem == "keo"){
//                 state.ketQua = "hòa nha"
//             }else if(computer.diem == "bua"){
//                 state.ketQua = "thua rùi"
//             }
//         };break;
//         case "bao" :{
//             if(computer.diem == "bao"){
//                 state.ketQua = "hòa nha "
//             }else if(computer.diem == "keo"){
//                 state.ketQua = "thua rùi"
//             }else if(computer.diem == "bua"){
//                 state.ketQua = "thắng rùi"
//                 state.tongThang += 1

//             }
//         };break;
//         case "bua" :{
//             if(computer.diem == "bao"){
//                 state.ketQua = "thua rùi "
//             }else if(computer.diem == "keo"){
//                 state.ketQua = "thắng nha"
//                 state.tongThang += 1

//             }else if(computer.diem == "bua"){
//                 state.ketQua = "hòa rùi"
//             }
//         };break;
//     }
// }
