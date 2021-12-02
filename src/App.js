
import './App.css';
import {useFormik} from "formik";

function App() {
  let click = false;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      valid: '',
    },
    onSubmit: values => {
      console.log('form: ', values);
    },
    validate: values=> {
      let errors = {};
      if(!values.email) errors.email = "Field required";
      if(!values.password) errors.password = "Field required";
      if(!values.email.includes("@") || !values.email.includes(".") ) errors.email = "Username should be an email";
      if(Object.keys(errors).length ===0 && click===true) errors.valid = "Login Successful";
      return errors
    },

  },);
  let handleClick = () => {
    click=true;
  };
  return (

    <div className={"main"}>
        <div className={"center"}>
          <form onSubmit={formik.handleSubmit} className={"form"}>
            <div>Username</div>
            <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email} placeholder={"Email"}/>
            {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}
            <div>Password</div>
            <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} placeholder={"Password"}/>
            {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
            <br/>
            {formik.errors.valid ? <div style={{color: 'green'}}>{formik.errors.valid}</div>: null}
            <button type="Submit" onClick={handleClick}>Sumbit</button>
          </form>
        </div>
    </div>
  );
}

export default App;
