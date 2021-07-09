import React from 'react'

function FooterAndSearch() {
    return (
        <> 
            {/*  Footer Section Begin  */}
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
                            {/*  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                            <div className="footer__copyright__text">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved 
                                </p>
                            </div>
                            {/*  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                        </div>
                    </div>
                </div>
            </footer>
            {/*  Footer Section End  */}

            {/*  Search Begin  */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/*  Search End  */}
        </>
    )
}

export default FooterAndSearch