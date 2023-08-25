import './footer.style.scss';
const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <h3 className="white">Multiply stream pipeline</h3>
                    <br />
                    <h5 className="white">Social networks:</h5>
                    <ul className="social">
                        <li><a href="https://www.instagram.com/ruslan.shayaqhmetov/"><img src="./instagram.png"
                            alt="" /></a></li>
                        <li><a href="https://www.facebook.com/ruslan.shayakhmetov.37/"><img src="./facebook.png"
                            alt="" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UC7mx3lrAz5b6oxAvNc1nnkw"><img
                            src="./youtube.png" alt="" /></a></li>
                        <li><a href="https://twitter.com/shayaqhmetov"><img src="./twitter.png" alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/in/ruslan-shayakhmetov-728b0b113/"><img
                            src="./linkedin.png" alt="" /></a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 action">
                    <button type="button" className="btn btn-outline-light col-lg-6 col-md-12">Contact me</button>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;