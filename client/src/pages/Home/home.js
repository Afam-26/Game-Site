import React from 'react';
import "./style.css";

export default function Main() {
    return (

        <div id="color" className="fixed-background-main bg-black">
            <section className="relative flex justify-start min-h-screen pt-6 lg:pt-32 px-8 flex-col">

                <div className=" block py-3 px-3  text-center">

                    <h1 className="mt-10 sm:animate-float text-transparent bg-clip-text bg-gradient-to-t from-blueGray-400 to-blueGray-100 text-6xl font-bold custom-font text-center leading-none lg:leading-snug home-name">
                        Afam Anekeh, Certified Full Stack Developer.
                        
                    </h1>      
                    
                    <img id="profilePic" src="./assets/images/ME.jpg" alt="me" />
                    <br/>
                    <br/>             
                  
                                      

                </div>
                
            </section>
        </div>


    );
}