import React, { Component } from 'react';
// import { Grid, Cell, Layout } from 'react-mdl';
import './../style/resume.css';
import { Cell, Grid, Card, CardActions, CardText, Button, CardTitle } from 'react-mdl'
import Experience from './experience';




class Resume extends Component {
    render() {
        return(
          <Grid>
              <Cell className="resume-left-col" col={4}>
                  <h2>Resume & Contact</h2>
                  <hr/>
                  <img src="https://img.icons8.com/fluent/52/000000/module.png"/>
                  <h3>Objective:</h3>
                  <h4>Seeking a challenging position as a software engineer in a leading organization where innovation and education are valued and encouraged.
                      I love to solve complex problems and learn new technology.
                  </h4>
                  <hr/>
                  <h4><img src="https://img.icons8.com/fluent/66/000000/map-pin.png"/>Mpls, MN</h4>
                  <hr/>
                  <h4><a target='_blank' href='http://www.linkedin.com/in/deeno-bahri'><img src="https://img.icons8.com/ios-filled/66/000000/linkedin.png"/></a>Linkedin</h4>  
                  <hr/>  
                  <h4><img src="https://img.icons8.com/cute-clipart/66/000000/file.png"/>Resume (PDF)</h4>
                  <hr/>
                  <h4><img src="https://img.icons8.com/dusk/66/000000/cell-phone.png"/>612-747-9100</h4>
                  <hr/>
                  <h4><img src="https://img.icons8.com/ios-filled/66/000000/send-mass-email.png"/>deenobahri12@gmail.com</h4>  
                  

              </Cell>

            <Cell className="resume-right-col" col={8}>
                <h2>Expertise:</h2>
                <hr className='lineBreak'/>
            <Card shadow={0} id='skillCard'>
            <img className='fe-icon' src="https://img.icons8.com/fluent/48/000000/web-design.png"/>
            <h5 className='cardTitle' >FRONT-END</h5>
            <hr className='cardLine'/>
            <ul>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>HTML/CSS</li>
                <li>Sass</li>
                <li>Jquery</li>
            </ul>
            </Card>
            <Card shadow={0} id='skillCard'>
            <img className='fe-icon' src="https://img.icons8.com/color/96/000000/console.png"/>
            <h5 className='cardTitle' >BACK-END</h5>
            <hr className='cardLine'/>
            <ul>
                <li>NODE.JS</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>APIs</li>
            </ul>            
            </Card>
            <Card shadow={0} id='skillCard'>
            <img className='fe-icon' src="https://img.icons8.com/officel/80/000000/database.png"/>  
            <h5 className='cardTitle' >DATABASE</h5>
            <hr className='cardLine'/>
            <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>SQL</li>
            </ul>
            </Card>
            <Card shadow={0} id='skillCard'>
            <img className='fe-icon' src="https://img.icons8.com/color/48/000000/server.png"/>
            <h5 className='cardTitle' >TOOLS</h5>
            <hr className='cardLine'/>
            <ul>
                <li>Heroku</li>
                <li>Github</li>
                <li>Gitlab</li>
                <li>MAC</li>
                <li>WINDOWS</li>
            </ul>
            </Card>
            <h2>Latest Experience:</h2>
            <hr className='lineBreak'/>

            <div className='experience'>
            <Experience jobName={<h4>Software Engineer: 2019 to Present-</h4>}/>
               <h5>BI worldwide:</h5>
               <hr/>
               <p className='descrip'>In this corporate environment my role is centered in the product delivery department where we work on new features, maintanice, and upgrades for 
               the clients software. It is also my responsibility to support other teams when necessary. My role as a software engineer at BI worldwide has a strong emphasis in javascript along with a heavy front-end focus. I work very carefuly with the Java and oracle engineers 
               to ensure quality code procedures are meant and we stay on scheadule to meet tight deadlines. Technologies used for this role include vanilla javascript, Bootstrap/Sass, HTML/CSS, jquery, backbone.js, React/Redux/Hooks, AWS. 
                </p>
            </div>
            </Cell>
          </Grid>
            )
    }
}
 export default Resume;

