import styles from '../styles/Home.module.css'
import Image from 'next/image' 
export default function cv(){
    return (
    <div className={styles.con}>
        <div className={styles.leftPanel}>
            <div className={styles.round}></div>
            <div className={styles.topr}></div>
            <div className={styles.nam}>Сэрчмаа</div>
            <div className={styles.name}>Баатарчулуун</div>
            <div className={styles.pic}>
            <Image className={styles.pro} src="/08.jpg" alt="Profile picture" width={"110px"}height={"150px"}/> 
            </div>
            <div className={styles.p}></div>
            <div className={styles.personal}>Personal Details</div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/user.png" alt="user" width={"15px"}height={"15px"}/> 
                <div className={styles.divv}>Сэрчмаа Баатарчулуун</div></div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/email-2.png" alt="user" width={"15px"}height={"15px"}/>
                <div className={styles.divv}>minsera1029@gmail.com</div></div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/phone-call.png" alt="user" width={"15px"}height={"15px"}/>
                <div className={styles.divv}>99508695</div></div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/home.png" alt="user" width={"15px"}height={"15px"}/>
                <div className={styles.divv}>Баянгол Дүүрэг, 7-р хороо, 12-р байр</div></div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/calendar.png" alt="user" width={"15px"}height={"15px"}/>
                <div className={styles.divv}>2002/10/29</div></div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/gender.png" alt="user" width={"15px"}height={"15px"}/>
                <div className={styles.divv}>Эм</div></div>
                <div className={styles.divone}>
                <Image className={styles.icon} src="/report.png" alt="user" width={"15px"}height={"15px"}/>
                <div className={styles.divv}>Монгол</div></div>
            
            <div className={styles.skill}>Skills</div>
                <div className={styles.divtwo}>
                <div className={styles.text}>HTML</div>
                      <div className={styles.rating}>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                      </div></div>
                <div className={styles.divtwo}>
                <div className={styles.text}>CSS</div>
                      <div className={styles.rating}>
                      <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          </div></div>
                <div className={styles.divtwo}>
                <div className={styles.text}>Javascript</div>
                      <div className={styles.rating}>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          </div></div>
                <div className={styles.divtwo}>
                <div className={styles.text}>C</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
                <div className={styles.divtwo}>
                <div className={styles.text}>C++</div>
                      <div className={styles.rating}>
                      <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          </div></div>
                <div className={styles.divtwo}>
                <div className={styles.text}>Java</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
            <div className={styles.languages}>Languages</div>
            <div className={styles.divthree}>
                <div className={styles.text}>Англи хэл</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
                         <div className={styles.divthree}>
                <div className={styles.text}>Испани хэл</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
                         <div className={styles.divthree}>
                <div className={styles.text}>Орос хэл</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
                         <div className={styles.divthree}>
                <div className={styles.text}>Солонгос хэл</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
                         <div className={styles.divthree}>
                <div className={styles.text}>Япон хэл</div>
                     <div className={styles.rating}>
                     <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                          <Image className={styles.rate} src="/circle-2.png" alt="circle" width={"10px"}height={"10px"}/>
                         </div></div>
                    <div className={styles.hobby}>Hobby</div>
                    <div className={styles.divfour}>
                        <Image className={styles.icon} src="/paint.png" alt="user" width={"15px"}height={"15px"}/> 
                        <div className={styles.lin}>Зураг</div></div>
                    <div className={styles.divfour}>
                        <Image className={styles.icon} src="/mic.png" alt="user" width={"15px"}height={"15px"}/> 
                        <div className={styles.lin}>Дуулах</div></div>
                    <div className={styles.divfour}>
                        <Image className={styles.icon} src="/ball.png" alt="user" width={"15px"}height={"15px"}/> 
                        <div className={styles.lin}>Бүжиглэх</div></div>
                
                <div className={styles.quality}>Qualities</div>
                <div className={styles.divfive}>
                <Image className={styles.icon} src="/group.png" alt="user" width={"15px"}height={"15px"}/> 
                <div className={styles.qua}>Багаар ажиллах</div></div>
                <div className={styles.divfive}>
                <Image className={styles.icon} src="/speech.png" alt="user" width={"15px"}height={"15px"}/> 
                <div className={styles.qua}>Бусадтай харилцах</div></div></div>
            
        <div className={styles.rightPanel}>
            <div className={styles.edu}>Education</div>
                 <div className={styles.group}>
                       <div className={styles.gr}>
                           <div className={styles.ed}>Сургуулиас өмнөх боловсрол</div>
                           <div className={styles.date}>Sep 2006 - May 2008</div>
                       </div>
                       <div className={styles.loc}>95-р цэцэрлэг, Улаанбаатар</div>
                 </div>
                 <div className={styles.group}>
                       <div className={styles.gr}>
                       <div className={styles.ed}>Дунд боловсрол</div>
                       <div className={styles.date}>Sep 2008 - Jun 2017</div>
                       </div>
                       <div className={styles.loc}>95-р цэцэрлэг, Улаанбаатар</div>
                 </div>
                 <div className={styles.group}>
                       <div className={styles.gr}>
                       <div className={styles.ed}>Бүрэн дунд боловсрол</div>
                       <div className={styles.date}>Sep 2017 - June 2020</div>
                       </div>
                       <div className={styles.loc}>95-р цэцэрлэг, Улаанбаатар</div>
                 </div>
                 <div className={styles.group}>
                     <div className={styles.gr}>
                     <div className={styles.ed}>Курс</div>
                     <div className={styles.date}>Sep 2020 - Present</div>
                     </div>
                       <div className={styles.loc}>95-р цэцэрлэг, Улаанбаатар</div>
                 </div>
            <div className={styles.Ach}>Achievement</div>
            <ul className={styles.achi}>
                <li>Дүүргийн англи хэлний олимпиадад тэргүүн байр</li>
                <li>Сургуулийн орос хэлний үг цээжлэх тэмцээнд дэд байр</li>
                <li>Дүүргийн загварын тэмцээнд дэд байр</li>
                <li>Сургуулийн математикийн олимпиадад дэд байр</li>
            </ul>
            <div className={styles.fam}>Family</div>
            <div className={styles.fami}>Ам бүл: 10</div>
            <div className={styles.fami}>
            <div>Эцгийн овог нэр: Гэндэн Баатарчулуун</div>
            <div>Боловсрол: Бүрэн дунд</div></div>
            <div className={styles.fami}>
            <div>Эхийн овог нэр: Бадарч Сэржмядаг</div>
            <div>Боловсрол: Бүрэн дунд</div></div>
            <div className={styles.other}>Experience</div>
            <div className={styles.other}>Recommedation</div>
            <div className={styles.other}>Other</div>
            <div className={styles.other}>Other</div>
            <div className={styles.other}>Other</div>
            <div className={styles.other}>Other</div>
            <div className={styles.other}>Other</div>
            <div className={styles.other}>Other</div>
        </div>
    </div>
     

    );
}
