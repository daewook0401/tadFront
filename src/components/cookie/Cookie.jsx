import { useState, useEffect } from "react";
import cookies from "js-cookie";
import axios from "axios";

const Cookie = () => {
  const [cookieName, setCookieName] = useState("");
  const [cookieValue, setCookieValue] = useState("");

  const makeCookie = () => {
    if(cookieName && cookieValue){
      cookies.set(cookieName, cookieValue, {expires: 1})
      setCookieName("");
      setCookieValue("");
      alert(`Cookie making that ${cookieName}=${cookieValue} is done`)
    }
  }
  const sendCookie = () => {
    axios.get('http://localhost:8080/api/cookie', {
      withCredentials: true,
    })
    .then((response)=> console.log(response));
  }
  return (<>
    <div>
      <div>cookie name</div>
      <input 
        type="text"
        value={cookieName}
        onChange={e => setCookieName(e.target.value)}/>
    </div>
    <div>
      <div>cookie value</div>
      <input 
        type="text"
        value={cookieValue}
        onChange={(e) => setCookieValue(e.target.value)}/>
    </div>
    <button onClick={makeCookie}>
      cookie make
    </button>
    <hr/>
    <button onClick={sendCookie}>서버로 쿠키 전달</button>
  </>)
};

export default Cookie;