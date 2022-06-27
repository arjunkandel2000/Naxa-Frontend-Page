import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/action';
import { useSelector } from 'react-redux'
export const MiniNavbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productList());
    }, [dispatch]);
    let data = useSelector((state) => state.productData);
    const title = data.map((items) => items.title)
    return (
        <div>
            <div className="row">
                <div className="col-sm-1 "></div>
                <div className="col-sm-11 ">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <p></p>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#gis">{title[2]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#survey">{title[4]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#data">{title[3]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#software">{title[5]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#frontier">{title[0]}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#research">{title[1]}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}
