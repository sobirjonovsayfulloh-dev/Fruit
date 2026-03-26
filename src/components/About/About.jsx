import "../About/About.css"
export default function About(){
    return(
        <div>
            <div className="container d-flex p-5 justify-content-between">
                <div className="box1 bg-light rounded d-flex flex-column justify-content-center align-items-center w-70 " >
                    <div className="box">
                        <i class="fa-solid fa-car-side text-success user"></i>
                    </div>
                   <h2 className="text-secondary">Free Shipping</h2>
                   <p>free on order about 300$</p>
                </div>
                <div className="box1  bg-light p-2 rounded d-flex flex-column justify-content-center align-items-center w-70 ">
                    <div className="box">
                    <i class="fa-solid fa-user-shield text-success user"></i>
                    </div>
                    <h2>Security payment</h2>
                    <p>100% security payment</p>
                </div>
                <div className="box1 bg-light p-2 rounded d-flex flex-column justify-content-center align-items-center w-70 ">
                    <div className="box"> 
                   <i class="fa-solid fa-arrow-right-arrow-left text-success user"></i>
                   </div>
                   <h2>30 Day return</h2>
                   <p>30 day money guarantee</p>
                </div>
                <div className="box1 bg-light p-2 rounded d-flex flex-column justify-content-center align-items-center w-70 ">
                     <div className="box">
                   <i class="fa-solid fa-phone text-success user"></i>
                   </div>
                   <h2>24/7 Support</h2>
                   <p>Support every time fast</p>
                </div>
            </div>
        </div>
    );
}