import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React from 'react'
import Footer from "./footer/Footer";
import Favorites from './favorites/Favorites'
import { Redirect, Route, Switch } from 'react-router-dom'
import Comments from "./comments/Comments";
import Authorization from './Authorization'
import AddCoursePage from './AddCourses/AddCoursePage'
import { useSelector } from 'react-redux'
import EditCourse from './EditCourse'

function App() {
  const token = useSelector(state => state.auth.user.token);

  // const history = useHistory();
  // const [title, setTitle] = useState('');
  // const [address, setAddress] = useState('');
  // const [phone, setPhone] = useState('');
  // const [price, setPrice] = useState('');
  // const [categoryId, setCategoryId] = useState('');


  let addCourse;

  if (token){
    addCourse = (
      <Switch>
        <Route path="/addCourse">
          <AddCoursePage
            // history={history}
            // title={title}
            // setTitle={setTitle}
            // address={address}
            // setAddress={setAddress}
            // phone={phone}
            // setPhone={setPhone}
            // price={price}
            // setPrice={setPrice}
            // categoryId={categoryId}
            // setCategoryId={setCategoryId}
          />
        </Route>
        <Route path="/editCourse/:id">
          <EditCourse
            // history={history}
            // title={title}
            // setTitle={setTitle}
            // address={address}
            // setAddress={setAddress}
            // phone={phone}
            // setPhone={setPhone}
            // price={price}
            // setPrice={setPrice}
            // categoryId={categoryId}
            // setCategoryId={setCategoryId}
          />
        </Route>
      </Switch>
      )
  }
  else {
    addCourse = (
      <Redirect to="/"/>
    )
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/comments"}>
          <Comments />
          </Route>
        <Route path={"/auth"}>
          <Authorization/>
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
        {addCourse}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
