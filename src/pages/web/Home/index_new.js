import React from 'react'

import { Avatar } from '../../../commonPages'

function Home() {
    return (

        <body>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader"></div>
            </div>

            {/* Offcanvas Menu Begin */}
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch"></span></li>
                    <li><a href="#"><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                    <li><a href="#"><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                </ul>
                <div className="offcanvas__logo">
                    <a href="./index.html">
                        <img src="./webAssets/img/logo.png" alt="" />
                        {/*
                <Avatar uri="./webAssets/img/logo.png" /> */}
                    </a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__auth">
                    <a href="#">Register</a>
                </div>
            </div>
            {/* Offcanvas Menu End */}

            {/* Header Section Begin */}
            {/* <header className="header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-2">
                    <div className="header__logo">
                        <a href="./index.html"><img src="webAssets/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                </div>
                <div className="col-lg-3">
                    <div className="header__right">
                        <div className="header__right__auth">
                            <a href="#">Register</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="canvas__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header> */}
            {/* Header Section End */}

            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="categories__item categories__large__item justify-content-around set-bg mb-0 vh-100"
                                data-setbg="https://static.tildacdn.com/tild3064-3832-4166-a230-323764346462/IMG_20210519_165615.jpg">
                                <div className="categories__text">
                                    <h1>Exhibition</h1>
                                    <h3 className="text-white">At the bottom</h3>
                                    <button type="submit" className="mt-3 site-btn px-5 py-3">Sign Up</button>
                                </div>
                                <div className="categories__text justify-content-between d-flex">
                                    <div className="">
                                        <div className="d-flex align-items-center mb-4"> <svg className="t828__item_icon" width="50px"
                                            height="50px" fill="none" stroke="#fff" stroke-width="5.79"
                                            stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path className="st0"
                                                d="M83.4 18h8.5v70.3H8.1V18h65.7zM25.7 27.8V8.7M44.3 64.3H25.1M74.3 64.3H55.1M44.3 45.3H25.1M74.3 45.3H55.1M72.4 27.8V8.7">
                                            </path>
                                        </svg>
                                            <div className="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <svg className="t828__item_icon" width="50px" height="50px" fill="none" stroke="#fff"
                                                stroke-width="5.79" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                                <path className="st0" d="M49.4 23v33.3L66 48"></path>
                                                <circle className="st0" cx="50" cy="50" r="41"></circle>
                                            </svg>
                                            <div className="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <svg className="t828__item_icon" width="50px" height="50px" fill="none" stroke="#fff"
                                                stroke-width="5.79" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                                <path className="st0"
                                                    d="M75.1 35.8C75.1 49.6 50 85.7 50 85.7s-25.1-36-25.1-49.9S36.1 10.7 50 10.7s25.1 11.2 25.1 25.1z">
                                                </path>
                                                <circle className="st0" cx="50" cy="35.1" r="9.3"></circle>
                                            </svg>
                                            <div className="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}

            {/* Exibition Concept */}
            <section className="product">
                <div className="container">
                <div className="row"><div className="col-lg-12 col-md-12"><div className="section-title"><h4>Exhibition concept</h4></div></div></div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div>
                                    <div className="dd tile_left">
                                        <img className="first_img" src="https://thumb.tildacdn.com/tild6133-6637-4139-b330-613430666566/-/resize/400x500/-/format/webp/IMG_2849.JPG" />
                                    </div>
                                    <div className="dd tile_right">
                                        <img className="first_img mt-md-5 mt-3 w-100" src="https://thumb.tildacdn.com/tild3837-3966-4564-b662-363533663062/-/resize/300x300/-/format/webp/IMG_2852.JPG" />
                                        <div className="bottom_image">
                                        <img className="third_img" src="https://thumb.tildacdn.com/tild6530-6237-4136-b366-346233333939/-/resize/400x300/-/format/webp/IMG_2863.JPG" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>The <strong> At the Bottom </strong> project is a reflection of artists about the origins of contemporary art. Using the classic postmodernist technique of mixing different cultural codes, artists reveal at the junction of these codes repeating symbols that form the basis of the history of art and human culture in general.</p>
                            <p>Classical sculpture, still life, R. Mutt Duchamp - recognizable cliches, understandable even to the most enlightened spectator. However, over time, all symbols lose their meaning, turning in the semantic field simply into indistinct muttering. "Beautiful" is the scariest word for art. This means that it has ceased to be "modern". That is, understandable to a living viewer, turning into a dead piece of paper or marble. However, those who know the history of art know that the "modern" in each era can only be formed from what has already been studied and considered by previous generations. Ruslan Solopeev and Ales Kochevnik reveal this relationship, revealing what is hidden "at the bottom".</p>
                            <p>The use of images borrowed from classical art is both flirting with the viewer, calculated for the effect of recognition, and an attempt to break through the impenetrable wall of the "aesthetic", returning the "voice" to the depicted.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11 offset-lg-1 mt-md-5">
                            <p>Ruslan writes: "The construction of the human eye is finely tuned to the perception of the surrounding world, helping a person to navigate in it. Each epoch carried out an" ontological throw-in "thereby developing a unique cultural code. The thickening of artistic symbolism forms a landscape that is ontologically perceived as richer than the everyday world. artist: to be a translator of the artistic design of being.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title">
                                <h4>New Listed</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div className="product__item">
                                <div className="product__item__pic set-bg"
                                    data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                                </div>
                                <div className="product__item__text">
                                    <h5 className="font-weight-bold"><a href="#" className="text-dark">"Dino and the Butterfly"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div className="product__price">405 000 R.</div><button type="submit"
                                        className="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div className="product__item">
                                <div className="product__item__pic set-bg"
                                    data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div className="product__item__text">
                                    <h5 className="font-weight-bold"><a href="#" className="text-dark">"Flamingos and Margarita"</a>
                                    </h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div className="product__price">405 000 R.</div><button type="submit"
                                        className="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title">
                                <h4>Series "At Marcel Duchamp"</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div className="product__item">
                                <div className="product__item__pic set-bg"
                                    data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                                </div>
                                <div className="product__item__text">
                                    <h5 className="font-weight-bold"><a href="#" className="text-dark">"Dino and the Butterfly"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div className="product__price">405 000 R.</div><button type="submit"
                                        className="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div className="product__item">
                                <div className="product__item__pic set-bg"
                                    data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div className="product__item__text">
                                    <h5 className="font-weight-bold"><a href="#" className="text-dark">"Flamingos and Margarita"</a>
                                    </h5>

                                    ] <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div className="product__price">405 000 R.</div><button type="submit"
                                        className="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title">
                                <h4>Series "At the Bottom"</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div className="product__item">
                                <div className="product__item__pic set-bg"
                                    data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                                </div>
                                <div className="product__item__text">
                                    <h5 className="font-weight-bold"><a href="#" className="text-dark">"Dino and the Butterfly"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div className="product__price">405 000 R.</div><button type="submit"
                                        className="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div className="product__item">
                                <div className="product__item__pic set-bg"
                                    data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div className="product__item__text">
                                    <h5 className="font-weight-bold"><a href="#" className="text-dark">"Flamingos and Margarita"</a>
                                    </h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div className="product__price">405 000 R.</div><button type="submit"
                                        className="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Discount Section Begin */}
            <section className="discount set-bg" data-setbg="webAssets/img/discount.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="discount__pic">
                                <img src="webAssets/img/discount.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>Discount</span>
                                    <h2>Summer 2019</h2>
                                    <h5><span>Sale</span> 50%</h5>
                                </div>
                                <div className="discount__countdown" id="countdown-time">
                                    <div className="countdown__item">
                                        <span>22</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>18</span>
                                        <p>Hour</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>46</span>
                                        <p>Min</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>05</span>
                                        <p>Sec</p>
                                    </div>
                                </div>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discount Section End */}

            {/* Trend Section Begin */}
            <section className="trend spad">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div className="section-title">
                                    <h4>The main directions of InArt development</h4>
                                </div>
                                <a href="#" className="blog__feature__item">
                                    <div className="blog__feature__item__pic">
                                        <img src="webAssets/img/blog/sidebar/fp-1.jpg" alt="" />
                                    </div>
                                    <div className="blog__feature__item__text">
                                        <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...</h6>
                                        <span>Seb 17, 2019</span>
                                    </div>
                                </a>
                                <a href="#" className="blog__feature__item">
                                    <div className="blog__feature__item__pic">
                                        <img src="webAssets/img/blog/sidebar/fp-2.jpg" alt="" />
                                    </div>
                                    <div className="blog__feature__item__text">
                                        <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...</h6>
                                        <span>Seb 17, 2019</span>
                                    </div>
                                </a>
                                <a href="#" className="blog__feature__item">
                                    <div className="blog__feature__item__pic">
                                        <img src="webAssets/img/blog/sidebar/fp-3.jpg" alt="" />
                                    </div>
                                    <div className="blog__feature__item__text">
                                        <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...</h6>
                                        <span>Seb 17, 2019</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Trend Section End */}

            {/* Services Section Begin */}
            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car"></i>
                                <h6>Free Shipping</h6>
                                <p>For all oder over $99</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money"></i>
                                <h6>Money Back Guarantee</h6>
                                <p>If good have Problems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support"></i>
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones"></i>
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}

            {/* Footer Section Begin */}
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    cilisis.</p>
                                <div className="footer__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            <div className="footer__copyright__text">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved
                                </p>
                            </div>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}

            {/* Search Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search End */}
        </body>
    )
}

export default Home