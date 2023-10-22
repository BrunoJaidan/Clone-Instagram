import ItemMenu from "./ItemMenu";
import logoInsta from "../assets/insta.png";
import verificado from "../assets/verificado.png";
import bruno from "../assets/brunin.jpg";
import { AiFillHome } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosPaperPlane } from 'react-icons/io';
import { BiMoviePlay } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

export default function ConteudoEsquerdo() {
  return (
  <div className="ConteudoEsquerdo">
    <div className="wrapLogo">
       <img src={logoInsta}/>
    </div>
    <div className="profile-info">
      <div className="profile-image-container">
        <img
          src={bruno}
          alt="Imagem de Perfil"
          className="profile-image"
        />
        </div>
        <div className="profile-name">Bruno Jaidan</div>
        <div className="profile-username">@brunojaidan</div>
        <div className="profile-stats">
        <div class="coisa1">
                 <p>90</p>
                 <p>Publicações</p>
        </div>
        <div className="divider"></div>
        <div class="coisa1">
                 <p>100K</p>
                 <p>Seguidores</p>
        </div>
        <div className="divider"></div>
        <div class="coisa1">
                 <p>512</p>
                 <p>Seguindo</p>
        </div>
        </div>
        <div className="dividir"></div>
      </div>
    <div className="menu-icons">
      <ul>
      <li className="menu-item1"><AiFillHome className="icon1"/> Feed</li>
      <li className="menu-item"><MdExplore className="icon"/> Explorar</li>
      <li className="menu-item"><AiOutlineHeart className="icon"/> Notificação</li>
      <li className="menu-item"><IoIosPaperPlane className="icon"/> Direct</li>
      <li className="menu-item"><BiMoviePlay className="icon"/> Reels</li>
      <li className="menu-item"><FiSettings className="icon"/> Confirgurações</li>
      </ul>
    </div>
    </div>
  )
}
