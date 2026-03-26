import "./Adress.css"
export default function Adress(){
    return(
        <>
        <div className="px-5 align-items-center">
        <div className="container_adress p-3 mb-2 bg-success text-white mt-0 d-flex gap-5 align-items-center ">
        <div className="d-flex gap-3">
        <i className="fa-solid fa-location-dot text-warning"></i>
        <h1 className="adrees">123 Street, New York</h1>
        <i className="fa-solid fa-envelope text-warning"></i>
        <h1 className="adrees">Email@Example.com</h1>
        </div>
        <h1 className="add">Privacy Policy/ Terms of Use / Sales and Refunds</h1>
         </div>
        </div>
        </>
    );
}