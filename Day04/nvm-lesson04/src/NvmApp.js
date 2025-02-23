
import NvmFuncComp from './components/NvmFuncComp'
import NvmFuncComp1 from './components/NvmFuncComp1';
function NvmApp() {
  //object
  const users={
    fullName:'Doan Tri Binh',
    age:20,
    cccd:"0010923413"

  }
  return (
    <div className="container border mt-3 bg-white">
    <h1>React JS Lesson04-Nguyễn Văn Minh</h1>
    <hr/>
    <div className='alert alert-danger'>
    <NvmFuncComp name="Văn Minh" address="150 tân khai" company= "Ha Noi"/>
    <hr/>
    <NvmFuncComp name="Đặng Thủy" address="Ứng Hòa" company= "fit-NTU"/>
    </div>
    <div className='alert alert-info'>
    <NvmFuncComp1 renderInfo ={users} />
    </div>
  </div>
  );
}

export default NvmApp;
