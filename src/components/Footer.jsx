
import React, { useState } from "react";
import visaCard from "../assets/visaCard.png";
import { Link } from "react-scroll";
import { FaFacebookSquare} from "react-icons/fa";
const Footer = () => {
    const [list, setList] = useState(false);
  
    const view = [
      {
        item: 1,
        view: "Termes et conditions ",
      },
      {
        item: 2,
        view: "confidentialité",
      },
      {
        item: 3,
        view: "Politique d'expédition ",
      },
     
      {
        item: 4,
        view: "contact",
      },
    ];
  
    return (
 <div className="foot">
  
        <ul className="footer ">
          {view.map(({ item, view }) => (
            <li
              key={item}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
               <Link to={view} smooth duration={500}>
                {view}
              </Link> 
            </li>
          ))}
        </ul>
  
        <div
          onClick={() => setList(!list)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          
        </div>
  
        {list && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {view.map(({ item, view }) => (
              <li
                key={item}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setList(!list)}
                  to={view}
                  smooth
                  duration={500}
                >
                  {view}
                </Link>
              </li>
            ))}
          </ul>
              
        )}
         <ul className="bankcard">
          <li>Devise:cad </li>
   <li><img src={visaCard} size ={30} alt="cartevisa"></img></li>
  <li> © 2023 Romantic Tous droits réservés. </li>
  </ul>
  <ul className="follow">
    <li><p>Suivez nous</p> <FaFacebookSquare /></li>
    <li>Boutique en ligne par Panierdachat™</li>
  </ul>
      </div>
     
    );

  };
  export default Footer