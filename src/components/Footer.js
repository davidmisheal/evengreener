import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faPercent, faTruckRampBox } from '@fortawesome/free-solid-svg-icons'
import { faTiktok, faYoutube, faInstagram, faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className='footer--main'>
            <section className='footer--benefits'>
                <div className='footer--benefit--ele'>
                    <FontAwesomeIcon icon={faPercent} size="2xl" style={{ color: "#b5b9bf", }} />
                    <span>
                        <h4>We Reward Loyal Customers</h4>
                        <p>Shop now to earn discounts!</p>
                    </span>
                </div>
                <div className='footer--benefit--ele--border'>
                    <FontAwesomeIcon icon={faTruckRampBox} size="2xl" style={{ color: "#b5b9bf", }} />                    <span>
                        <h4>Enjoy Free Delivery</h4>
                        <p>On mainladnd UK orders over £10.</p>
                    </span>
                </div>
                <div className='footer--benefit--ele'>
                    <FontAwesomeIcon icon={faArrowsRotate} size="2xl" style={{ color: "#b5b9bf", }} />
                    <span>
                        <h4>We Support a Circular Economy</h4>
                        <p>By turning waste into products.</p>
                    </span>
                </div>
            </section>
            <section className='footer--join'>
                <div className='footer--join--r'>
                    <h2>Join our EvenGreener Gang!</h2>
                    <p>Sign up for discounts, product updates, composting and water saving tips, and much more.</p>
                    <span>
                        <input type='email' placeholder='Email Address' /><button className='footer-btn'>SUBSCRIBE</button>
                    </span>
                    <span className='footer--join--social'>
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                        <FontAwesomeIcon icon={faPinterest} size="lg" />
                    </span>
                </div>
                <div className='footer--join--l'>
                    <h4>Become part of the climate solution</h4>
                    <p>We supply the UK's favourite composters, recycling bins and water butts, making sustainable living easier and more accessible than ever. Our premium range of products crucially lower your environmental footprint and are priceless in the fight against climate change. Together we can make a difference.
                    </p>
                    <p className='footer--join--l--link'>OUR IMPACT</p>
                </div>
            </section>
            <section className='footer--navtabs'>
                <svg width="151" height="69" viewBox="0 0 151 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 27.6825C0 22.2139 3.65849 18.1423 9.28695 18.1423C14.9154 18.1423 18.2121 22.2139 18.2121 27.6825V29.3457H6.2717C6.75414 30.9823 8.00044 31.8605 9.48796 31.8605C11.6991 31.8605 12.5836 30.8227 12.9454 30.4235L17.3008 33.6169C15.6793 35.8655 12.865 37.256 9.48796 37.256C3.7389 37.256 0 33.1512 0 27.6825ZM12.1414 25.4072C11.7393 24.0767 10.8549 23.132 9.28695 23.132C7.83963 23.132 6.87475 24.0101 6.35211 25.4072H12.1414Z" fill="white" />
                    <path d="M19.0156 18.5016H25.6492L29.4283 28.2413L33.2476 18.5016H39.8677L32.4971 36.8634H26.2924L19.0156 18.5016Z" fill="white" />
                    <path d="M40.6836 27.6825C40.6836 22.2139 44.3421 18.1423 49.9705 18.1423C55.599 18.1423 58.8957 22.2139 58.8957 27.6825V29.3457H46.9553C47.4377 30.9823 48.684 31.8605 50.1716 31.8605C52.3827 31.8605 53.2672 30.8227 53.629 30.4235L57.9844 33.6169C56.3763 35.8522 53.562 37.2493 50.185 37.2493C44.4225 37.256 40.6836 33.1512 40.6836 27.6825ZM52.825 25.4072C52.4229 24.0767 51.5385 23.132 49.9705 23.132C48.5232 23.132 47.5583 24.0101 47.0357 25.4072H52.825Z" fill="white" />
                    <path d="M62.1133 18.5016H68.5458V19.8321C69.8544 18.7569 71.5114 18.1896 73.2094 18.2354C76.305 18.2354 80.3254 19.7922 80.3254 25.6999V36.8767H73.8928V26.7245C73.8928 23.6908 71.7219 23.571 71.159 23.571C70.5962 23.571 68.5458 23.6908 68.5458 26.7245V36.8634H62.1133V18.5016Z" fill="white" />
                    <path d="M16.6041 65.607L20.745 62.1343C21.2415 62.6354 21.8372 63.029 22.4946 63.29C23.1519 63.5511 23.8567 63.6741 24.5643 63.6511C25.1673 63.6511 28.1022 63.4116 28.1424 59.8623C26.9386 60.86 25.4079 61.3843 23.8406 61.3359C18.9358 61.3359 15.2773 57.3076 15.2773 51.839C15.2773 46.3703 18.9358 42.3786 23.8406 42.3786C25.4083 42.3315 26.9389 42.857 28.1424 43.8556V42.6581H34.5749V59.7825C34.5749 65.0482 31.2246 69 24.5643 69C21.147 69 18.2926 67.6029 16.6041 65.607ZM28.1424 51.839C28.1424 49.8431 26.8023 48.3662 24.7921 48.3662C22.7819 48.3662 21.4954 49.8431 21.4954 51.839C21.4954 53.8348 22.7819 55.3517 24.7921 55.3517C26.8023 55.3517 28.1424 53.8348 28.1424 51.839Z" fill="white" />
                    <path d="M38.5938 42.6581H45.0263V45.9845C45.7151 44.8856 46.6745 43.9791 47.814 43.3506C48.9536 42.722 50.2356 42.3921 51.5392 42.392V48.3795C50.4537 48.3795 45.0263 47.8606 45.0263 53.6086V61.0299H38.5938V42.6581Z" fill="white" />
                    <path d="M53.1484 51.839C53.1484 46.3703 56.8069 42.2988 62.4354 42.2988C68.0638 42.2988 71.3605 46.3703 71.3605 51.839V53.5022H59.4201C59.9026 55.1388 61.1489 56.017 62.6364 56.017C64.8476 56.017 65.7321 54.9791 66.0939 54.5799L70.4492 57.7733C68.8411 60.0053 66.0269 61.4058 62.6498 61.4058C56.8873 61.4191 53.1484 57.3076 53.1484 51.839ZM65.2898 49.5637C64.8878 48.2331 64.0033 47.2884 62.4354 47.2884C60.9881 47.2884 60.0232 48.1666 59.5006 49.5637H65.2898Z" fill="white" />
                    <path d="M73.7734 51.839C73.7734 46.3703 77.4319 42.2988 83.0604 42.2988C88.6888 42.2988 91.9822 46.3703 91.9822 51.839V53.5022H80.0451C80.5276 55.1388 81.7739 56.017 83.2614 56.017C85.4726 56.017 86.3537 54.9791 86.7155 54.5799L91.0709 57.7733C89.4661 60.0053 86.6485 61.4058 83.2748 61.4058C77.5123 61.4191 73.7734 57.3076 73.7734 51.839ZM85.9148 49.5637C85.5128 48.2331 84.6283 47.2884 83.0604 47.2884C81.6131 47.2884 80.6482 48.1666 80.1256 49.5637H85.9148Z" fill="white" />
                    <path d="M95.1992 42.6581H101.632V43.9886C102.94 42.9134 104.597 42.3461 106.295 42.392C109.391 42.392 113.411 43.9487 113.411 49.8564V61.0299H106.979V50.8943C106.979 47.8606 104.808 47.7408 104.245 47.7408C103.682 47.7408 101.632 47.8606 101.632 50.8943V61.0299H95.1992V42.6581Z" fill="white" />
                    <path d="M116.625 51.839C116.625 46.3703 120.283 42.2988 125.912 42.2988C131.54 42.2988 134.837 46.3703 134.837 51.839V53.5022H122.897C123.379 55.1388 124.625 56.017 126.113 56.017C128.324 56.017 129.209 54.9791 129.57 54.5799L133.926 57.7733C132.318 60.0053 129.503 61.4058 126.126 61.4058C120.364 61.4191 116.625 57.3076 116.625 51.839ZM128.766 49.5637C128.364 48.2331 127.48 47.2884 125.912 47.2884C124.465 47.2884 123.5 48.1666 122.977 49.5637H128.766Z" fill="white" />
                    <path d="M138.055 42.6581H144.487V45.9845C145.176 44.8856 146.135 43.9791 147.275 43.3506C148.414 42.722 149.697 42.3921 151 42.392V48.3795C149.915 48.3795 144.487 47.8606 144.487 53.6086V61.0299H138.055V42.6581Z" fill="white" />
                    <path d="M96.4414 14.7161C94.3207 17.7099 88.2198 21.1793 85.1878 19.0737C82.1558 16.9681 83.3418 10.0924 85.4659 7.08196C89.2115 1.76966 98.6425 0 98.6425 0C98.6425 0 100.19 9.4038 96.4414 14.7161Z" fill="white" />
                    <path d="M93.1975 35.7457C89.8472 34.1923 85.3579 28.8301 86.9225 25.5004C88.487 22.1706 95.5092 22.134 98.8628 23.6874C104.783 26.4284 108.177 35.3299 108.177 35.3299C108.177 35.3299 99.1174 38.4867 93.1975 35.7457Z" fill="white" />
                </svg>
                <div className='navtabs'>
                    <ul>
                        <h4>SHOP</h4>
                        <li>
                            Bestsellers
                        </li>
                        <li>
                            Composters
                        </li>
                        <li>
                            Water Butts
                        </li>
                    </ul>
                    <ul>
                        <h4>GOOD TO KNOW</h4>
                        <li>
                            Bulk Enquiries
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Customer reviews
                        </li>
                    </ul>
                    <ul>
                        <h4>SUPPORT</h4>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Delivery and Returns
                        </li>
                        <li>
                            Blogs and Guides
                        </li>
                    </ul>
                    <ul>
                        <h4>SHOP</h4>
                        <li>
                            Bestsellers
                        </li>
                        <li>
                            Composters
                        </li>
                        <li>
                            Water Butts
                        </li>
                    </ul>
                    <ul>
                        <h4>GOOD TO KNOW</h4>
                        <li>
                            Bulk Enquiries
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Customer reviews
                        </li>
                    </ul>
                    <ul>
                        <h4>SUPPORT</h4>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Delivery and Returns
                        </li>
                        <li>
                            Blogs and Guides
                        </li>
                    </ul>
                </div>
                <p className='footer--rights'>© 2024 EvenGreener. All Rights Reserved.</p>
            </section>
        </div>
    )
}
