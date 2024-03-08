import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import AfterLoginPage from './Pages/AfterLoginPage';
import Ayush from './Pages/afl/ayush';
import Harsh from './Pages/afl/harsh';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin';
import TeacherLogin from './Pages/TeacherLogin';
import StudentLogin from './Pages/StudentLogin';
import MasterStudentPage from './Pages/Under Student Login Pg/MasterStudentPage';
import SigninCreatePage from './Pages/SigninCreatePage';
import StudentZone from './Pages/StudentCRUD/StudentZone';
import StudentDetails from './Pages/StudentCRUD/StudentDetails';
import IdentityCard from './Pages/StudentCRUD/IdentityCard';
import Syllabus from './Pages/StudentCRUD/Syllabus';
import Books from './Pages/StudentCRUD/Books';
import Video from './Pages/StudentCRUD/Video';
import Notice from './Pages/StudentCRUD/Notice';

function App() {

  const url = "//localhost:8000"

  return (  
    <div className="">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        {/* <Route path='/ayush' element={window.open('//github.com/ti7112' , "_self")}/> */}
        <Route path='/Ayush' element={<Ayush />}/>
        <Route path='/Harsh' element={<Harsh />}/>
        <Route path='/afterloginpage' element={<AfterLoginPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/TeacherLogin' element={<TeacherLogin/>}/>
        <Route path='/StudentLogin' element={<StudentLogin/>}/>
        <Route path='/MasterStudentPage' element={<MasterStudentPage url={url}/>}/>
        <Route path='/SigninCreatePage' element={<SigninCreatePage url={url} />}/>
        <Route path='/StudentZone' element={<StudentZone url={url}/>}/>
        <Route path='/StudentDetails' element={<StudentDetails/>}/>
        <Route path='/IdentityCard' element={<IdentityCard/>}/>
        <Route path='/Syllabus' element={<Syllabus/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Video' element={<Video/>}/>
        <Route path='/Notice' element={<Notice/>}/>
      </Routes>
    </div>
  );
}

export default App;
