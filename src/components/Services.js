import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'ct Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. '

            },
            {
                icon:<FaHiking/>,
                title:"  Endless Hiking",
                info:'ct Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. '
                
            },
            {
                icon:<FaShuttleVan/>,
                title:" Free shuttle",
                info:'ct Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. '
                
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'ct Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. '
                
            }
        ]
    };
    render() {
        return (
            <section className="services">
               <Title title="services" /> 
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                    return(
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                   })}
               </div>
               
            </section>
        );
    }
}
