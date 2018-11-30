import React from 'react';

function Hero() {
    return (
        <section id="hero">
            <img className="hero__img" srcSet="img/x-files-hero.jpg 1x, img/x-files-hero@2x.jpg 2x"/>
            <div className="hero__info">
                <div className="hero__info__wrapper">
                    <img className="hero__logo" src="img/x-files-logo.png" alt="The X Files"/>
                    <a href="#" className="button">Play</a>
                </div>
            </div>
        </section>
    );
};

module.exports = Hero;
