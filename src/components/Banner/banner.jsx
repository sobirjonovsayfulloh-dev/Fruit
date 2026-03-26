import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Fruit1 from "../../assets/img/Fruit1.png"
import Vegetables from "../../assets/img/Vegetables.png"
import "./Banner.css"
import { padding } from "@mui/system";
export default function Banner(){
   return(
    <>
    <div>
        <div className="banner p-5 d-flex align-items-center">
            <div className="shape"></div>
            <div className="container col-8">
            <h1 className="text-warning fs-3 ">100% Organic Foods</h1>
            <h1 className="text-success about_name py-5">Organic Veggies & Fruits Foods</h1>
            <div className="inputRow">
                <input type="text"  placeholder="Search ... "/>
                <button>Submit Now</button>
            </div>
            </div>
            <div id="carouselExampleInterval" className="carousel slide col-4 mt-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={Fruit1} className="d-block w-100" alt="..."/>
                <div className="btn">
                </div>
                    <h1 className="btn_text">Fruits</h1>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={Vegetables} className="d-block w-100" alt="..."/>
                <div className="btn">
                </div>
                    <h1 className="btn_text">Vegetables</h1>
                </div>
               
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>
            </div>
        </div>
    </div>
    </>
   );
}