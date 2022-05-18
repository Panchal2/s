import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {baseURL} from './../../util/config';
import axios from "axios";
// import {message} from "antd";
import {
  ADMISSION_DETAIL
  } from "../../constants/ActionTypes";



  import {showErrorMessage,getAdmissionSuccess,showAuthMessage} from "../../appRedux/actions/admissionAction";
  var bodyFormData = new FormData();
//Project aPI call
const AdmissiondetailsRequest = async (collageName,branch,AdmisionType,fname,Mo1,FMo1,EM0,Schoolname,District,CastCategory,Chk1,Bank1,Amount1,Chk2,Bank2,Amount2,ChkMo,Document,Formfee,Remark,Agent) =>  {

bodyFormData.append('collageName', collageName);
bodyFormData.append('branch',branch);
bodyFormData.append('AdmisionType',AdmisionType);
bodyFormData.append('fname',fname);
bodyFormData.append('Mo1',Mo1);
bodyFormData.append('FMo1',FMo1);
bodyFormData.append('EM0',EM0);
bodyFormData.append('Schoolname',Schoolname);
bodyFormData.append('District',District);
bodyFormData.append('CastCategory',CastCategory);
bodyFormData.append('Chk1',Chk1);
bodyFormData.append('Bank1',Bank1);
bodyFormData.append('Amount1',Amount1);
bodyFormData.append('Chk2',Chk2);
bodyFormData.append('Bank2',Bank2);
bodyFormData.append('Amount2',Amount2);
bodyFormData.append('ChkMo',ChkMo);
bodyFormData.append('Document',Document);
bodyFormData.append('Formfee',Formfee);
bodyFormData.append('Remark',Remark);
bodyFormData.append('Agent',Agent);

await axios({
  method: "post",
  url: baseURL+"api/Admision/AdmisionAdd",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(authUser => authUser.data)
  .catch(error => error);
};

console.log("data1",baseURL);




function* Admissiondetails({payload}) {
  const {collageName,branch,AdmisionType,fname,Mo1,FMo1,EM0,Schoolname,District,CastCategory,Chk1,Bank1,Amount1,Chk2,Bank2,Amount2,ChkMo,Document,Formfee,Remark,Agent} = payload;
  try {
    const adata = yield call(AdmissiondetailsRequest, collageName,branch,AdmisionType,fname,Mo1,FMo1,EM0,Schoolname,District,CastCategory,Chk1,Bank1,Amount1,Chk2,Bank2,Amount2,ChkMo,Document,Formfee,Remark,Agent);
    // if (adata.status) {
    
    //   yield put(getAdmissionSuccess(adata.data));
    //   message.error(adata.data.message);
    // } else {
    //   message.success(adata.data.message);
    //   yield put(showErrorMessage(adata.message));
    
    // }
    if (adata.message) 
    {
      yield put(showAuthMessage(adata.message));
    } 
    else 
    {

      yield put(getAdmissionSuccess());
    }
  
  } catch (error) {
    yield put(showErrorMessage(error));
  }
}


export function* admissiondetails() {
    yield takeEvery(ADMISSION_DETAIL, Admissiondetails);
  }



  export default function* rootSaga() {
    yield all([fork(admissiondetails)]);
  }