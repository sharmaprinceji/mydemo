import Header from "./Header";
import React,{useState,useEffect} from "react";
export default function Home(props){
  const [name, setName] = useState('');
  useEffect(() => {
    if (localStorage.getItem('user-name')) {
      setName(localStorage.getItem('user-name'));
    } else {
      setName(props.name);
    }
  }, [props.name]);
    return (
        <div style={{minHeight: '100vh',backgroundImage: `url(https://www.questionpro.com/blog/wp-content/uploads/2023/03/product-management-lifecycle.jpg)`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
            <Header />
            <h2 className="text-secondary">Welcome to <span style={{ color: "#004687" }}>{name}</span> page!</h2>
        </div>
    )
}