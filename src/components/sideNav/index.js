import { useState } from "react";
import style from "./index.module.css"
import {FaSkyatlas,FaTachometerAlt,FaDatabase,FaChartBar,FaDownload,FaSignInAlt,FaSignOutAlt} from "react-icons/fa"
import { Link} from "react-router-dom";
export default function SideNav(props){
    const[state,setState]=useState({humidity:0,temperature:0});
    const handleSignOut=()=>{
       props.dispatch({type:false})
    }
    return(
<>
<div className={style.sideNavWrapper}>
              <div className={style.logoWrapper}>
                <FaSkyatlas className={style.dashLogo} />
                <h4 className={style.dashHeader}>Live Aku<br></br> Monitor</h4>
              </div>

              <Link to="/">
                <hr></hr>
                <div className={style.menuItemWrapper}>
                  <p>
                    <span>
                      <FaTachometerAlt className={style.menuItemImg} />
                    </span>
                    Dashboard
                  </p>
                </div>
              </Link>
              <hr></hr>
              <div className={style.menuItemWrapper}>
                <p>
                  <span>
                    <FaChartBar className={style.menuItemImg} />
                  </span>
                  Analytics
                </p>
              </div>
              <hr></hr>
              <Link to="/data-download">
                <div className={style.menuItemWrapper}>
                  <p>
                    <span>
                      <FaDownload className={style.menuItemImg}/>
                    </span>
                    Data Download
                  </p>
                </div>
              </Link>
              <hr></hr>
              <div className="signout">
                <hr></hr>
                <Link to="/">
                <div className={style.menuItemWrapper} onClick={handleSignOut}>
                  <p>
                    <span>
                      <FaSignOutAlt className={style.menuItemImg}/>
                    </span>
                    Sign Out
                  </p>
                </div>
                </Link>
                <hr></hr>
              </div>
            </div>
</>
    );

}