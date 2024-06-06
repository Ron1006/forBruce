import React, { useEffect, useRef, useState } from 'react';
import './css/detail.css';

function Detail(){
    return(
        <>
        <nav className="navbar">
            <img src="./images/logo2.png" alt="Logo" className="logo" />
        </nav> 

        <div className="page-content">
        <div className="item-detail">
            <div className="header">
                <h1>Item #: SCP003</h1>
                <div className="level">
                    <p>Level: 1 Unrestricted</p>
                </div>
                <div className="update">
                    <p>Update by Rong</p>
                </div>
                
            </div>
            <div className="classification">
                <div className="class-box">
                    <p>Containment class: <span>KETER</span></p>
                </div>
                <div className="class-box">
                    <p>Secondary class: <span>RADIX</span></p>
                </div>
                <div className="class-box">
                    <p>Disruption class: <span>INFRARED</span></p>
                </div>
                <div className="class-box">
                    <p>Risk class: <span>CRYPTIC</span></p>
                </div>
            </div>
        </div>
        </div>

        <div className="containment">
        <h1>Special Containment Procedures</h1>
        <p>Due to the relative difficulty of accessing SCP-8001 without assistance, SCP-8001 is considered to be generally self-containing. In the time since SCP-8001 was discovered by Foundation personnel and a base of operations was established therein, only three civilian vessels have come within 150km of an access point, and none met any of the other understood prerequisites for passage through those access points.
            <br/><br/>
            Mobile Task Force Ω-91 "Sentinels" will maintain a persistent perimeter around the most common access points to SCP-8001 by way of a single Raymond Howe-class patrol vessel to be anchored at the K-162 floating research platform, roughly 25km from access point "Aleph".</p>
        
        </div>
        <div className="description">
        <h1>Description</h1>
        <p>SCP-8001 is the edge of the planet Earth. The geological, geographical, or ontological origin of SCP-8001 is unknown, and its existence in spite of the obvious and scientifically verified spherical shape of the planet exists as a logical impossibility that serves as the primary academic goal of researchers assigned to SCP-8001. SCP-8001 is not an extra-planar space or pocket dimension - research teams stationed at Site-99 on the island of Last Watch can be detected by GPS, can use satellites to make telephone calls or transfer information digitally, and have launched rockets or flares that are visible to persons who are not within SCP-8001's locality.</p>
        </div>
        </>
        );
}

export default Detail;