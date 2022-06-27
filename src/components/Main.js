import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/action';
import { useSelector } from 'react-redux'

function Main() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productList());
    }, [dispatch]);
    let data = useSelector((state) => state.productData);
    const title = data.map((items) => items.title)
    const photos = data.map((items) => items.photo)
    const description1 = data.map((items) => items.description1)
    console.log(description1)
    const description2 = data.map((items) => items.description2)
    const x = description1[2]
    console.log(typeof(x))

    return (
        <div>
            <div className='api-container'>
                <section id="gis">
                    <div className="row">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4 d-flex justify-content-center ">
                            <img className='img-fluid' src={photos[2]} alt="" />
                        </div>
                        <div className="col-sm-6 ">
                            <div className='gis'>
                                <h2>{title[2]}</h2>
                                <div dangerouslySetInnerHTML={{__html:description1[2]}}></div>
                                <div dangerouslySetInnerHTML={{__html:description2[2]}}></div>
                                {/* <p>{description1[2]}</p>
                                <p>{description2[2]}</p> */}
                            </div>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <section id="survey">
                    <div className="row">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4  d-flex justify-content-center ">
                            <img className='img-fluid' src={photos[4]} alt="" />
                        </div>
                        <div className="col-sm-6 ">
                            <div className='survey'>
                                <h2>{title[4]}</h2>
                                <div dangerouslySetInnerHTML={{__html:description1[4]}}></div>
                                <div dangerouslySetInnerHTML={{__html:description2[4]}}></div>
                                {/* <p>{description1[4]}</p>
                                <p>{description2[4]}</p> */}
                            </div>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <section id="data">
                    <div className="row">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4  d-flex justify-content-center">
                            <img className='img-fluid' src={photos[3]} alt="" />
                        </div>
                        <div className="col-sm-6 ">
                            <div className='data'>
                                <h2>{title[3]}</h2>
                                <div dangerouslySetInnerHTML={{__html:description1[3]}}></div>
                                <div dangerouslySetInnerHTML={{__html:description2[3]}}></div>
                                {/* <p>{description1[3]}</p>
                                <p>{description2[3]}</p> */}
                            </div>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <section id="software">
                    <div className="row">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4  d-flex justify-content-center ">
                            <img className='img-fluid' src={photos[5]} alt="" />
                        </div>
                        <div className="col-sm-6 ">
                            <div className='software'>
                                <h2>{title[5]}</h2>
                                <div dangerouslySetInnerHTML={{__html:description1[5]}}></div>
                                <div dangerouslySetInnerHTML={{__html:description2[5]}}></div>
                                {/* <p>{description1[5]}</p>
                                <p>{description2[5]}</p> */}
                            </div>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <section id="frontier">
                    <div className="row">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4  d-flex justify-content-center ">
                            <img className='img-fluid' src={photos[0]} alt="" />
                        </div>
                        <div className="col-sm-6 ">
                            <div className='frontier'>
                                <h2>{title[0]}</h2>
                                <div dangerouslySetInnerHTML={{__html:description1[0]}}></div>
                                <div dangerouslySetInnerHTML={{__html:description2[0]}}></div>
                                {/* <p>{description1[0]}</p>
                                <p>{description2[0]}</p> */}
                            </div>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                </section>
                <br />
                <br />
                <br />

                <section id="research">
                    <div className="row">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4  d-flex justify-content-center ">
                            <img className='img-fluid' src={photos[1]} alt="" />
                        </div>
                        <div className="col-sm-6 ">
                            <div className='research'>
                                <h2>{title[1]}</h2>
                                <div dangerouslySetInnerHTML={{__html:description1[1]}}></div>
                                <div dangerouslySetInnerHTML={{__html:description2[1]}}></div>
                                {/* <p>{description1[1]}</p>
                                <p>{description2[1]}</p> */}
                            </div>
                        </div>
                        <div className="col-sm-1 "></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Main;