import React, { useState } from "react";

function all() {
    return (
        <div>
            <header className="max-w-[1200px] mx-auto px-4 py-3 ">
                <nav className="flex justify-between items-center">
                    <img src="/logo/logoEvelin.png" alt="logo" className="w-[100px] h-[56]" />
                    <div className=" flex  py-5 gap-[40px]">
                        <h2 className="cursor-pointer text-[14px] ">Intro</h2>
                        <h2 className="cursor-pointer text-[14px]">Portfolio</h2>
                        <h2 className="cursor-pointer text-[14px]">Pages</h2>
                        <h2 className="cursor-pointer text-[14px]">About</h2>
                        <h2 className="cursor-pointer text-[14px]">Blog Us</h2>
                        <h2 className="cursor-pointer text-[14px]">Contact</h2>
                        <div className="bg-white shadow px-2 rounded-xs">
                            <img src="/logo/facebookLogo.png" className="w-[16.21px] h-[29.99] " />
                        </div>
                    </div>
                </nav>
            </header>


            <main className="max-w-[1200px] mx-auto ">
                <section id="Portfolio" className=" flex flex-col justify-center items-center mt-[90px]  ">
                    <div className=" space-y-[10px] flex flex-col items-center justify-center">
                        <p className="text-[#7C8499] text-[16px]">Our Portfolio Layouts</p>
                        <h2 className="text-[#3B3B3B] text-[39px]">6 Home Pages</h2>
                    </div>
                    <div className=" grid grid-cols-2 items-start justify-start mt-[30px]">
                        <div className="px-[40px] space-y-[20px] flex flex-col justify-center items-center">
                            <button className="bg-[#5231FF] w-[120px] h-[28px] rounded-[5px] text-white">Homepage 1</button>
                            <img src="/image/PortfolioImage.png" className="w-[531px] h-[600px] " />
                            <button className="bg-[#5231FF] w-[120px] h-[28px] rounded-[5px] text-white">Homepage 4</button>
                            <img src="/image/Frame(2).png" className="w-[531px] h-[600px]" />
                            <button className="bg-[#5231FF] w-[120px] h-[28px] rounded-[5px] text-white">Homepage 6</button>
                            <img src="/image/Frame(7).png" className="w-[531px] h-[600px]" />
                        </div>
                        <div className="px-[40px] space-y-[20px] flex flex-col justify-center items-center">
                            <button className="bg-[#5231FF] w-[120px] h-[28px] rounded-[5px] text-white">Homepage 2</button>
                            <img src="/image/Frame(1).png" className="w-[531px] h-[210px] " />
                            <button className="bg-[#5231FF] w-[120px] h-[28px] rounded-[5px] text-white">Homepage 3</button>
                            <img src="/image/Frame4.png" className="w-[531px] h-[600px]" />
                            <button className="bg-[#5231FF] w-[120px] h-[28px] rounded-[5px] text-white">Homepage 5</button>
                            <img src="/image/Frame8.png" className="w-[531px] h-[600px]" />
                        </div>
                    </div>
                </section>

                <hr class="border-t-1 border-[#E4ECF6] w-full my-[80px]" />

                <section id="statistics" className="flex flex-col justify-center items-center space-y-[40px]">

                    <div className="text-center">
                        <p className="text-[#7C8499] ">Facts to Know</p>
                        <h2 className="text-[#3B3B3B] text-center text-[40px] ">We create artworks, concepts,<br />& brand design</h2>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="text-center mx-[91px]">
                            <span className="text-[#5231FF] text-[30px]">6</span>
                            <p className="text-[#7C8499] text-[14px]">Portfolio Layouts</p>
                        </div>
                        <div className="text-center mx-[91px]">
                            <span className="text-[#5231FF] text-[30px]">3</span>
                            <p className="text-[#7C8499] text-[14px]">About Layouts</p>
                        </div>
                        <div className="text-center mx-[91px]">
                            <span className="text-[#5231FF] text-[30px] mt-[16px]">2</span>
                            <p className="text-[#7C8499] text-[14px]">Blog Layouts</p>
                        </div>
                        <div className="text-center mx-[91px] mt-[48px]">
                            <span className="text-[#5231FF] text-[30px]">23</span>
                            <p className="text-[#7C8499] text-[14px]">Page Layouts</p>
                        </div>
                    </div>
                </section>

                <hr class="border-t-1 border-[#E4ECF6] w-full my-[80px]" />

                <section id="Explore" className=" ">
                    <div className="flex justify-between ">
                        <div className="space-y-[12px]">
                            <p className="text-[16px] text-[#7C8499]">Explore Page Layouts</p>
                            <h2 className="text-[24px] text-[#3B3B3B] ">AMAZING INNER PAGES</h2>
                            <p className="text-[15px] text-[#7C8499] mt-[13px]">This template includes a lot of stunning sub pages that <br />are easy to edit and customize</p>
                            <button className="rounded-[25px] h-[50px] w-[151px] bg-[#5231FF] text-white text-[12px] mt-[26px]">Get Started</button>
                        </div>

                        <div className="flex flex-col items-end justify-end gap-[10px]">

                            <div className="flex gap-[8px]">
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    About Us v.1
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    About Us v.2
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    About Us v.3
                                </div>
                            </div>

                            <div className="flex mr-[75px]">
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Licensing
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Style Guide
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Quote
                                </div>
                            </div>

                            <div className="flex gap-[8px]">
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Password
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    404
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Blog v.1
                                </div>
                            </div>

                            <div className="flex gap-[8px] justify-start mr-[230px]">
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Blog v.2
                                </div>
                                <div className="w-[219px] h-[55px] text-[14px] text-[#1F2532] border border-[#EAF0FD] rounded-[8px] flex items-center justify-center">
                                    Contact
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="SingUp" className="bg-[url('/baground/bgSingUp.png')] w-[1200px] h-[486px] bg-cover bg-center text-white flex flex-col justify-end items-center space-y-[10px] my-[90px]">
                    <p className="text-[#7C8499] text-[16px] ">Newsletter</p>
                    <h2 className="text-[39px]">Sign Up to Newsletter</h2>
                    <p className="text-[14px] text-center mt-[15px]">You gotta go through it to see there ain’t nothing to it. Did you feel that? <br />Look at me – I’m not out of breath anymore!</p>
                    <div class="flex items-center bg-white rounded-full shadow-md w-[650px] max-w-md overflow-hidden mt-[98px]">
                        <input type="email" placeholder="Enter your email" className="flex-grow px-5 py-3 text-[#7C8499]  focus:outline-none rounded-l-full " />
                        <button className="px-6 py-3 font-semibold text-white bg-[#5231FF] rounded-full  transition" >SUBSCRIBE </button>
                    </div>

                    <p className="text-[13px] text-[#7C8499] mb-[32px]">I respect your privacy, so we never share your info</p>
                </section>

            </main>

            <footer className="max-w-[1200px] mx-auto ">
                <div className=" grid grid-cols-2">
                    <div className="space-y-[30px]">
                        <p className="text-[17px]">About Evelin</p>
                        <div className="space-y-[14px] ">
                            <p className="text-[14px] text-[#7C8499]">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Suspendi varius enim <br />in eros elementum tristique. Vorem ipsum <br />dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="bg-white shadow px-2 rounded-xs w-[30px] ">
                                <img src="/logo/facebookLogo.png" className="w-[16.21px] h-[29.99] " />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="space-y-[30px]">
                            <p className="text-[16px]">What we do</p>
                            <div className="space-y-[13px]">
                                <p className="text-[14px] text-[#7C8499]">Portflio</p>
                                <p className="text-[14px] text-[#7C8499]">Blog</p>
                                <p className="text-[14px] text-[#7C8499]">Contact</p>
                                <button className="bg-[#5231FF] w-[116px] h-[22px] text-[9px] text-white rounded-[5px]">Request a Quote</button>
                            </div>
                        </div>
                        <div className="space-y-[30px]">
                            <p className="text-[17px]">Useful Links</p>
                            <div className="space-y-[13px]">
                                <p className="text-[14px] text-[#7C8499]">Password Page</p>
                                <p className="text-[14px] text-[#7C8499]">404 Page</p>
                                <p className="text-[14px] text-[#7C8499]">Style Guide</p>
                                <p className="text-[14px] text-[#7C8499]">Licensing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-[50px]">
                    <hr class="border-t-1 border-gray-300 w-full" />
                    <div className="flex justify-between mt-[30px]">
                        <div>
                            <p className=" text-[#7C8499] text-[13px]">  Created by <span className="text-[#212127]">Dorian Hoxha</span> / <span className="text-[#212127]">Style Guide</span> / <span className="text-[#212127]">Image Licensing</span></p>
                        </div>
                        <div>
                            <p className="text-[#7C8499] text-[13px]">Evelin All rights reserved / Powered by <span className="text-[#212127]"> Webflow</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default all;
