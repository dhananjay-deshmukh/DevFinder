import React from 'react'
import styles from './Home.module.css'
import Hero from '../../assets/Home_Animation.gif'
import {FiChevronDown} from 'react-icons/fi'
import Background from '../../assets/6064.jpg' 
import { Link } from 'react-router-dom'
import Atharva from '../../assets/nalla.jpg'
import Ak from '../../assets/Ak.jpg'
import Dhanya from '../../assets/dhanya2.jpg'
import Typed from 'react-typed'


import { DevCard } from '../../components/DevCard/DevCard'
import { Layout } from '../../components/Layout/Layout'

export const Home = () => {
  return (
    <>
    
    <div className={styles.wrapper}>
      <div className={styles.heroPage}>
        <div className={styles.hero}>
          <div className={styles.header}>
            <h1>The best platform for {' '} <br />
                <Typed className={styles.typed} strings={['Developers', 'Interns', 'Companies']} typeSpeed={120} backSpeed={140} loop /></h1>
            <br /><br />  
            <Link to='/login'><button className={styles.heroButton}>
            Get Started
            </button></Link>
          </div>
          <img src={Hero} alt="" className={styles.heroGIF} />
          

        </div>
        <div className={styles.scroll}>
          <a href="#about"><FiChevronDown size='2rem'  /></a>
          
          </div>
      </div>

      <div className={styles.about} id="about">
        <img className={styles.aboutBackground} src={Background} alt="" />
        <h1 className={styles.aboutHeader}>About DevFinder</h1>
        <p className={styles.aboutInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque consectetur, harum voluptate error inventore pariatur architecto tempore deserunt obcaecati tempora sit, nobis eum quos eligendi amet, exercitationem sint! Quam dicta ipsa exercitationem esse quas corrupti suscipit quisquam veniam assumenda aut provident maiores cupiditate iure quae possimus ab, omnis molestiae animi consequatur? Quasi quos amet facilis aliquid fuga sit quidem quam odio. Sapiente soluta possimus voluptas, impedit iusto laboriosam voluptates! Ex, pariatur! Quae ratione iure quaerat numquam beatae nulla sequi dolores odit, quod magni voluptatibus labore esse eos sapiente. Mollitia molestias cum consequuntur, placeat nisi, aut ab tenetur deleniti inventore veniam illum voluptas magni autem repellendus corporis nam odit excepturi maxime quod? Aliquam odio possimus fuga magnam beatae fugit sequi ad reprehenderit, quos velit esse consequatur laudantium veniam. Reiciendis quod corporis cupiditate qui facilis quidem voluptate aperiam asperiores recusandae officiis. Labore saepe, laudantium natus debitis, nostrum, facilis nulla fugit ad molestias perferendis veniam nam officiis molestiae minus ipsum error dolorem quaerat id eveniet quis eos. Ea aut suscipit adipisci, atque earum id? Sequi sit sapiente libero, consequatur, alias suscipit assumenda consectetur blanditiis voluptas quasi, ut ullam aut recusandae similique ea nisi debitis corporis asperiores. Ullam quidem suscipit quae blanditiis nostrum quaerat! Doloribus eveniet quasi animi minus neque praesentium nihil fuga ipsum, quo totam labore. Natus reiciendis autem maiores id provident recusandae ipsum animi quam illum officiis officia suscipit veniam eaque, odio aspernatur. Magni aliquid nam eos quis sapiente? Hic aspernatur ab iure consequuntur dolor iste enim, delectus debitis quas, saepe facere sint pariatur laborum ipsum magni repellat voluptatem quibusdam quos nihil deserunt facilis. Tempora corrupti deleniti quae beatae quibusdam officiis repellendus eius, itaque nostrum harum in minima illum consequuntur expedita quod accusamus cupiditate totam id enim! Dignissimos itaque debitis doloremque dolor deleniti quaerat numquam nisi asperiores, id odit quisquam iste.</p>
      </div>
        
      <h1 className={styles.contributers}>Project Contributers</h1>
        <div className={styles.devProfiles}>
          
        <DevCard
          imagePath = {Atharva}
          name="Atharva Bhide"
          position="Backend developer"
          bio="The sun was setting behind the mountains, casting a warm orange glow nt, letting the peace and tranquility of the moment wash over me. When I opened them again, I saw a deer grazing nearby, looking up at me curiously before bounding away into the woods. It was a moment of pure magic, one that I would never forget."
          skill1="python"
          skill2="python"
          skill3="python"
          skill4="python"
          skill5="python"

        />
        <DevCard
        imagePath={Ak}
          name="Aakash Kasabekar"
          position="React developer"
          bio="The sun was setting behind the mountains, casting a warm orange glow nt, letting the peace and tranquility of the moment wash over me. When I opened them again, I saw a deer grazing nearby, looking up at me curiously before bounding away into the woods. It was a moment of pure magic, one that I would never forget."
          skill1="CSS"
          skill2="JavaScript"
          skill3="React"
          skill4="Design"
          skill5="Node"

        />
        <DevCard
        imagePath={Dhanya}
          name="Prathamesh Sahasrabuddhe"
          position="Backend developer"
          bio="The sun was setting behind the mountains, casting a warm orange glow nt, letting the peace and tranquility of the moment wash over me. When I opened them again, I saw a deer grazing nearby, looking up at me curiously before bounding away into the woods. It was a moment of pure magic, one that I would never forget."
          skill1="python"
          skill2="python"
          skill3="python"
          skill4="python"
          skill5="python"

        />
          
      </div>

      

    </div>
    
   
    </>
  )
}