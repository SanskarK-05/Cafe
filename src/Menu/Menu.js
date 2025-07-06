import React, { useState } from "react";
import Images from "./Image/Images";
import Header from "./Header";
import Footer from "./Footer";

function Menu() {
    const [selectedSection, setSelectedSection] = useState("all");

    return (
        <>
            <div>
                <Header setSelectedSection={setSelectedSection} />
                <img src={Images.co} alt="logo" className="logo" />
                <h2>COFFEE TIME</h2>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {(selectedSection === "cold" || selectedSection === "all") && (
                            <div>
                                <div className="card h-100">
                                    <div className="box1">
                                        <img src={Images.co1} alt="Cold Coffee" className="image" />
                                        <div className="card-body">
                                            <h3 className="title">Cold Coffee</h3>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This is a wider card with supporting text below as a natural lead-in to content.</p>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This is a wider card with supporting text below as a natural lead-in to content.</p>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This is a wider card with supporting text below as a natural lead-in to content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(selectedSection === "hot" || selectedSection === "all") && (
                            <div className="hot-coffee">
                                <div className="card h-100">
                                    <div className="box2">
                                        <img src={Images.co2} alt="Hot Coffee" className="image" />
                                        <div className="card-body">
                                            <h3 className="title">Hot Coffee</h3>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This card has supporting text below as a natural lead-in to lorem content.</p>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This card has supporting text below as a natural lead-in to lorem content.</p>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This card has supporting text below as a natural lead-in to lorem content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(selectedSection === "desserts" || selectedSection === "all") && (
                            <div className="desserts">
                                <div className="card h-100">
                                    <div className="box3">
                                        <img src={Images.co3} alt="Desserts" className="image" />
                                        <div className="card-body">
                                            <h3 className="title">Desserts</h3>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This is a wider card with supporting text below as a natural lead-in to content.</p>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This is a wider card with supporting text below as a natural lead-in to content.</p>
                                            <div className="grid-container">
                                                <p>Food Item</p>
                                                <p>$ 00.00</p>
                                            </div>
                                            <p className="text">This is a wider card with supporting text below as a natural lead-in to content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}

export default Menu;