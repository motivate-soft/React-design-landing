import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Card from './views/Components/Card';
import Cloud from './assets/Images/cloud.png'
import Workspace from './assets/Images/modern-workplace.png'
import Service from './assets/Images/sécurité.png'
import ServiceManage from './assets/Images/service-managé.png'
import BlueIllustration from './assets/Formes/illustration/bleu-mini.png'
import GreenIllustration from './assets/Formes/illustration/vert-mini.png'
import RedRountRight from './assets/Formes/angle-arrondi/saumon/4.png'
import BlueLeft from './assets/Formes/demi-arrondi/saumon/4.png'



const items = [
  {
    id: '1',
    img: Cloud,
    title: 'Cloud',
    text: 'Optimiser l’utilisation de votre IT au quotidien avec des technologies agiles, sécurisées et innovantes.',
    buttonText: 'En savoir plus',
    active: false,
  },
  {
    id: '2',
    img: Workspace,
    title: 'Modern Workplace',
    text: 'Mettre en place et interconnecter des solutions collaboratives pour vos équipes.',
    buttonText: 'En savoir plus',
    active: false,
  },
  {
    id: '3',
    img: Service,
    title: 'Sécurité',
    text: 'Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).',
    buttonText: 'En savoir plus',
    active: false,
  },
  {
    id: '4',
    img: ServiceManage,
    title: 'Services Managés',
    text: 'Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre S',
    buttonText: 'En savoir plus',
    active: false,
  },
]

class App extends React.Component {
  state = {
    items: items
  }

  handleMouseEnter = (id) => {
    console.log('id', id)
    const { items } = this.state
    items.map((item, index) => {
      if (item.id === id) {
        item.active = true
      } else {
        item.active = false
      }
    })

    this.setState({ items: items })
  }

  handleMoustLeave = (id) => {
    console.log('id', id)
    const { items } = this.state
    items.map((item, index) => {
      if (item.id === id) {
        item.active = false
      }
    })

    this.setState({ items: items })
  }

  render() {
    return (
      <div className="container">

        <div className="text-center title-container">
          <h2>Nos métiers</h2>
          <div className="subtitle-container">
            <h5>Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien. </h5>
          </div>
        </div>

        <div className="main p-5">
          {/* <img src={BlueLeft} className='blue-left-round' alt='blue' /> */}
          <div className='blue-left-round'></div>
          <div className="card-container">
            <img src={BlueIllustration} className='blue-illusion' alt='blue' />
            <img src={GreenIllustration} className='green-illusion' alt='blue' />
            <img src={RedRountRight} className='red-righht-round' alt='blue' />
            <div className="row">
              {
                items.map((item, index) => (
                  <div className="col-sm-6 col-md-3">
                    <Card
                      key={index}
                      id={item.id}
                      active={item.active}
                      img={item.img}
                      title={item.title}
                      text={item.text}
                      buttonText={item.buttonText}
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMoustLeave}
                    />

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
