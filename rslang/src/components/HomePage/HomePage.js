import React from 'react';
import PageListItem from '../PageListItem/PageListItem';
import AboutUsCard from '../AboutUsCard/AboutUsCard';
import { Link } from 'react-router-dom';
import './homePage.css';

function HomePage({cards}) {
  const aboutUs = [
    { id: 1, title: 'darya-kun', src: '/img/avatar-darya.png'},
    { id: 2, title: 'alionamu', src: '/img/avatar-aliona.png'},
    { id: 3, title: 'kolyamoloko', src: '/img/avatar-kolya.png'}
   ]

  const elements = cards.map((item) => {
    return <div key={item.id}><Link to={item.link}><PageListItem title={item.title} description={item.description} src={item.src}/></Link></div>
  });

  const aboutUsCards = aboutUs.map((item) => {
    return <div key={item.id}><AboutUsCard title={item.title} src={item.src}/></div>
  });

  return (
    <div className="container">
      <section className="intro">
        {elements}
      </section>
      <section className="about-us">
        <h3 className="about-us__title">Наша команда</h3>
        <div className="about-us__content">
          {aboutUsCards}
        </div>
      </section>
    </div>
  )
}
  
  export default HomePage;