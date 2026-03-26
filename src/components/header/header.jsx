import "./Header.css"

export default function Header(){
    return(
    <>
      <div className="header d-flex justify-content-between m-3  align-items-center ">
          <a href="" className="text-success logo fw-bold text-decoration-none fs-1 text">Fruitables</a>
          <ul className="menu d-flex gap-4 text  align-items-center">
                <li className="menu-item list-unstyled"><a href="" className="text-success text-decoration-none">Home</a></li>
                <li className="menu-item list-unstyled"><a href="" className="text-black text-decoration-none">Shop</a></li>
                <li className="menu-item list-unstyled"><a href="" className="text-black text-decoration-none">Shop Detail</a></li>
                <li className="menu-item list-unstyled"><a href="" className="text-black text-decoration-none">Contact</a></li>

               
                <div className="dropdown ">
                <button className="btn1 btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Pages
                </button>
                <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="#">Cart</a></li>
                    <li><a className="dropdown-item" href="#">Chackout</a></li>
                    <li><a className="dropdown-item" href="#">Testimonial</a></li>
                </ul>

            </div>
          </ul>
            <div className="icon_container d-flex gap-3 p-1 mt-0">
            <i className="fa-solid fa-magnifying-glass text-success fs-3 "></i>
            <i className="fa-solid fa-bag-shopping text-success fs-3 "></i>
            <i className="fas fa-user text-success fs-3"></i>
            <div className="box"></div>
            </div>                

      </div>
    </>
    );
}