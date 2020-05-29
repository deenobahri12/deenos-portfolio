import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../style/aboutme.css'
import avatar from './../assets/resume-image.jpg'



class AboutMe extends Component {
    render() {
        return(
            
            
          <Grid>
              <div className='aboutme-grid'>
              <Cell  col={12}>
              <h2><img src={avatar}/>About me</h2>
              <hr/>
                <p>
                  Since I was young, electronics and technology intrigued me. I was always curious of the process and mechanics that went into creating my smartphone, my Playstation, or the websites I would browse. Upon finishing high school, I wasn’t sure what my focus of study should be. Initially, I thought my passion was personal training and fitness. Early on, I successfully created Optimal Health & Performance which is my personal training and strength coaching business. 
                  While I come from a disciplined fitness background and enjoy personal training, it never provided me with the challenge or satisfaction I hoped for. While my training business was successful, I started to seek out other avenues to creatively express myself.
                  In 2016, I was introduced to computer programming through a close friend of mine.
                </p> 
                <p>
                  Programming was never a career path I considered pursing. However, 
                  after learning more about what coding entailed it only drove me to want to study more and continue to ask questions. After going through some online programs, I was surprised to see how I could easily spend hours researching and learning about all kinds of different software.
                  The first language I learned basic programming with was Python. Once I became comfortable with the basic concepts such as variables, while loops, for-loops, logical operations, etc., I wanted to apply to a professional certificate program.
                  For about a year of conducting research and graining a better understanding of programming, I decided to enroll in the full stack software development professional certificate program at the University of Minnesota.
                </p>
                <p> 
                  Since then I have worked professionally as a fulltime software engineer in the business intelligence industry. I learned all around software development, including the front end UI, backend functionality, databases, and server side development. My work ethic, motivation to continue learning, and commitment to my profession are strengths I pride myself in. 
                  I have created a solid foundation to continue building upon my software engineering skills and ability.
                </p>
              </Cell>
              </div>
          </Grid>
            
        )
    }
}
 export default AboutMe;

