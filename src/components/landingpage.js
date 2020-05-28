import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../style/landingpage.css'
import Typist from 'react-typist';



class LandingPage extends Component {
    render() {
        return(  
          <Grid>
         <div className='context'>
            <img className='moduleIcon' src="https://img.icons8.com/plasticine/100/000000/module.png"/>
          <Typist>
            <Typist.Delay ms={1000} />
            <h1>Deeno Bahri</h1>
          </Typist>  
            <div className='banner-text'>  
              <h1>Software Engineering</h1>
              <hr/>
              <p>OOP | Front-end | Beck-end | Databases </p>
            </div>
            </div>
          </Grid>
        )
    }
}
 export default LandingPage;

