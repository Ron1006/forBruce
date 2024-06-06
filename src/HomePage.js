import React, { useEffect, useRef, useState } from 'react';
import supabaseClient from './supabaseClient';

import './css/styles.css';

const cardData = [
    { title: "Sackboy™: A Big Adventure", description: "Take Sackboy on an epic 3D platforming adventure with your friends." },
    { title: "Destruction AllStars", description: "Master the art of 2" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 2" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    { title: "Destruction AllStars", description: "Master the art of 3" },
    // Add more cards as needed
];

function HomePage() {

    const carouselRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [items, setItems] = useState([]); // 添加状态以存储从数据库获取的项目
    const [selectedItem, setSelectedItem] = useState(null); // 添加状态以存储选中的项目
    
    

    // for fetch supabase
    useEffect(
        ()=> {
            fetchItems();
        }, []
    )

    const fetchItems = async () => {
        const {data, error} = await supabaseClient.from('SCP').select('item');
        console.log(data);
        
        if(error){
            console.error("Erroe fetching items: ", error)
        }else{
            setItems(data);
        }
    }

    const fetchItemDetails = async (item) => {
        const {data, error} = await supabaseClient.from('SCP'). select('*').eq('item', item).single();
        if(error){
            console.error("Error fetching record: ", error)
        }else{
            setSelectedItem(data);
        }
    }


    // for card display
    

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollByAmount = (direction) => {
        const carousel = carouselRef.current;
        if (carousel) {
            // Assuming a gap of 20px for all screens
            const gap = 20;
            const cardWidth = screenWidth <= 768 ? screenWidth * 0.85 : 340 ; // 85vw for mobile, 340px for desktop
            const moveDistance = cardWidth + 8;

            carousel.scrollBy({ left: direction * moveDistance, behavior: 'smooth' });
        }
    };


    return (
        <div>
            <nav className="navbar">
                <img src="./images/logo2.png" alt="Logo" className="logo" />
                <ul>
                    {
                        items.map(
                            (scp)=>(
                                <li key={scp.item} onClick={()=>fetchItemDetails(scp.item)}>
                                    {scp.item}
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>
            <div className="carousel-container">

                <ul>
                    {
                        items.map(
                            (scp)=>(
                                <li key={scp.item} onClick={()=>fetchItemDetails(scp.item)}>
                                    {scp.item}
                                </li>
                            )
                        )
                    }
                </ul>
                <button className="carousel-button left-button" onClick={() => scrollByAmount(-1)}>&#10094;</button>
                <div className="carousel" ref={carouselRef}>
                    <div className="container">
                        {cardData.map((card, index) => (
                            <div className="card" key={index}>
                                <div className="image" style={{ backgroundImage: `url('./images/image${index + 1}.jpg')` }}></div>
                                <div className="content">
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                    <button>Find out more</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-button right-button" onClick={() => scrollByAmount(1)}>&#10095;</button>
            </div>
        </div>
    );
}

export default HomePage;
