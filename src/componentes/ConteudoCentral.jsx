import { HiMagnifyingGlass } from 'react-icons/hi2';
import { MdNotificationsNone } from 'react-icons/md';
import { IoIosPaperPlane } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Story } from "../componentes/Story"
import { Post } from "../componentes/Post"
import { Post1 } from "../componentes/Post"
import { Post2 } from "../componentes/Post"
import { Post3 } from "../componentes/Post"
import "./style.css";


export default function ConteudoCentral() {
    return (
      <div className='ConteudoCentral'>
        <div className='container-header'>
        <div className="input-fake">
              <IconContext.Provider value={{ color: '#8e8e8e' }}>
              <AiOutlineSearch />
              </IconContext.Provider>
                    
            <input placeholder="Pesquisar" />
          </div>

     
     <div className='menu-icons'> 
      <IconContext.Provider value={{ size: "26px" }}>
        <div>
        <MdNotificationsNone/>
        </div>
        
        <div>
        <IoIosPaperPlane/>
        </div>
      </IconContext.Provider>
      </div>
      </div>

      <div className='MainGrid'>
        <div className='first-column' style={{gridArea: "firstColumn"}}>
        <div className='box'>
          <Story/>
        </div>

        <div className='box' style={{margin: "30px 0"}}>
          <Post/>
        </div>

        <div className='box' style={{margin: "30px 0"}}>
          <Post1/>
        </div>

        <div className='box' style={{margin: "30px 0"}}>
          <Post2/>
        </div>

        <div className='box' style={{margin: "30px 0"}}>
          <Post3/>
        </div>
      </div>


     </div>
     </div>
    )
  }