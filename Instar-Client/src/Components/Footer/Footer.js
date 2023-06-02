import React , {Component} from 'react';
import './Footer.css'

const Footer = () => {
        return (
        <>
            <footer class="footer-02">
			    <div class="container">
				<div class="row">
					<div class="col-md-4 col-lg-5">
						<div class="row">
							<div class="col-md-12 col-lg-8 mb-md-0 mb-4">
								<h2 class="footer-heading">
                                    <a href="#" class="logo">Instar</a>
                                </h2>
								<p>This site helps designer buy their works and people find beautiful designs</p>
								<span>
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-google"></i>
                                    <i class="bi bi-youtube"></i>
                                    <i class="bi bi-instagram"></i>
                                    <span class="ion-ios-arrow-round-forward">
                                </span>
                                </span>
							</div>
						</div>
					</div>
				<div class="col-md-8 col-lg-7">
					<div class="row">
						<div class="col-md-3 mb-md-0 mb-4 ">
							<h4 class="footer-heading">Contact</h4>
							<ul class="list-unstyled">
                                <li>
                                <i class="bi bi-telephone-fill"></i>
                                +216 28 727 014
                                </li>
                                <li>
                                    <div class="py-1 d-block">
                                <i class="bi bi-geo-alt"></i> <span></span><span></span>
                                <a href="#" >Contact us</a>
                                </div>
                                </li>
                            </ul>
						</div>
						<div class="col-md-3 mb-md-0 mb-4 border-left">
							<h4 class="footer-heading">Guide</h4>
							<ul class="list-unstyled">
                                <li><a href="#" class="py-1 d-block">Features</a></li>
                                <li><a href="#" class="py-1 d-block">Careers</a></li>
                                <li><a href="#" class="py-1 d-block">Blog Post</a></li>
                                <li><a href="#" class="py-1 d-block">Help &amp; Support</a></li>
                            </ul>
						</div>
						<div class="col-md-3 mb-md-0 mb-4 border-left">
							<h4 class="footer-heading">Community</h4>
							<ul class="list-unstyled">
                                <li><a href="#" class="py-1 d-block">About us</a></li>
                                <li><a href="#" class="py-1 d-block">Our Client</a></li>
                                <li><a href="#" class="py-1 d-block">legal notice</a></li>
                            </ul>
						</div>
						<div class="col-md-3 mb-md-0 mb-4 border-left">
							<h4 class="footer-heading">Signup</h4>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="@email"/>
                                <div class="input-group-append">
                                    <button class="btn btn-secondary" type="button">
                                        <i class="bi bi-cursor-fill"></i>
                                    </button>
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</div>
				
          <div class="col-md-6 col-lg-8">

            <p class="copyright">Copyright 2022 &copy;All rights reserved </p>
          </div>
        </div>
			
		</footer>

            </>
            )
}
export default Footer;