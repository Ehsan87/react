import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Exprience from './experience';
import Skills from './skills';


class Resume extends Component{

    render(){
        return(
           <div>
               <Grid>
                   <Cell col={4}>
                   <div style={{textAlign:'center'}}>
                     <img
                     src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                     alt="avatar"
                     style={{height:'200px'}}
                     />
                    </div>
                      
                      <h2 style={{paddingTop:'2em'}}>Ehsan Samanipour</h2>
                      <h4 style={{color:'gray'}}> Programmer</h4>
                      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                           when an unknown printer took a galley of type and scrambled</p>
                      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>   
                      <h5>Address</h5> 
                      <p>1 Northolt road,Harrow, London ,Ha20Es</p>
                      <h5>Phone</h5>
                      <p>0044786754321</p>
                      <h5>Email</h5>
                      <p>somone@example.com</p>
                      <h5>Web</h5>
                      <p>www.Mywebsite.com</p>
                      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

        
                   
                   
                   </Cell>
                   <Cell className="resume-right-col" col={8}>
                   <h2>Education</h2>
                   
                   <Education
                   startYear={2003}
                   endYear={2006}
                   schoolName="MyUniversity"
                   schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 15when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book."
                   />
                      <Education
                   startYear={2007}
                   endYear={2010}
                   schoolName="My 2nd University"
                   schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 15when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book."
                   />

                   <hr style={{borderTop:'3px solid #e22947'}}/>
                   <h2>Exprience</h2>
                   
                   <Exprience
                   startYear={2009}
                   endYear={2012}
                   jobName="First Job"
                   jobDescription= "Lorem Ipsum is simply dummy text of the printing and typesetting 
                          Lorem Ipsum has been the industrys standard dummy text ever since the 15when an unknown printer
                           took a galley of type and scrambled it to make a type specimen book."                 
                    />
                    
                    <Exprience
                   startYear={2012}
                   endYear={2016}
                   jobName="Second Job"
                   jobDescription= "Lorem Ipsum is simply dummy text of the printing and typesetting 
                          Lorem Ipsum has been the industrys standard dummy text ever since the 15when an unknown printer
                           took a galley of type and scrambled it to make a type specimen book."                 
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills
                    skill="javascript"
                    progress={100}
                    />
                    <Skills
                    skill="C#"
                    progress={60}
                    />
                    <Skills
                    skill="java"
                    progress={40}
                    />
                    <Skills
                    skill="Mysql"
                    progress={75}
                    />
                   </Cell>
               </Grid>
           </div>
        )
    }
}
export default Resume;
