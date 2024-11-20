import '../App.css';
import { useLocation } from 'react-router-dom';
import { ImageColorPicker } from 'react-image-color-picker';
import React, { useState } from "react";

const Photo = () => {
    const location = useLocation(); 
    const ph = location.state.value;
    let but1 = false, but2 = false;
    let but3 = false;

    const [bgColor, setBgColor] = useState("");
    const [bgColor1, setBgColor1] = useState("");
    const [bgColor2, setBgColor2] = useState("");
    const [name, setName] = useState("");
    const [head,sethead] = useState("");
    const [head1,sethead1] = useState("");
    const [ar, setar] = useState([]);
    const [avoid,setavoid]=useState([]);

    function b1() {
        but1 = true;
        but2 = false;
        but3 = false;  
    }

    function b2() {
        but1 = false;
        but2 = true;
        but3 = false;  
    }

    function b3() {
        but1 = false;
        but2 = false;
        but3 = true; 
    }

    function picker(color) {
        if (but1) {
            but2 = false;
            but3 = false;  
            setBgColor(color);
        } else if (but2) {
            but1 = false;
            but3 = false;  
            setBgColor1(color);
        } else if(but3){
            but1 = false;
            but2 = false;  
            setBgColor2(color);
        }
    }

    function generate() {
        fetch(`https://79103a91-278b-49aa-bc08-0c3af5549d4c.mock.pstmn.io/color`)
            .then((response) => response.json())
            .then((data) => {
                setName(data.palette_Name);
                setar(...ar,data.recommended_colors);
                setavoid(...avoid,data.colors_to_avoid);
                sethead("recommended_colors :");
                sethead1("colors_to_avoid :");
            });
    }

    return (
        <div className='photo-big-box'>
            <h1>Select Your Colors</h1>
            <p>Use the color picker tool to identify your hair, skin, and eye colors. For hair and skin, choose the <br />
            primary tones without focusing on highlights or shadows. For eyes, select the most prominent color, <br />
            typically found in the center of the iris.</p>
            
            <div className='main-photo'>
                <ImageColorPicker onColorPick={picker} imgSrc={ph} />
            </div>

            <div className='color-btn'>
                <button className='bn' onClick={b1} style={{ backgroundColor: bgColor }}>Skin</button>
                <button className='bn' onClick={b2} style={{ backgroundColor: bgColor1 }}>Hair</button>
                <button className='bn' onClick={b3} style={{ backgroundColor: bgColor2 }}>Eye</button>
            </div>

            <button onClick={generate}>Generate Palette</button>   
            
           <h1>{name}</h1>    
           <h2>{head}</h2>   
        <div className='color-box' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", }}>
           {ar.map((color) => (
            <div>

            <div style={{
                backgroundColor: color.hex_code, 
                height: "150px",
                width: "150px",
                }}
                
            ></div>
            {color.color_name} <br />
            {color.usage } <br />
            <p className='description'>{color.description}</p>
            </div>
          
           ))}
        </div>



           <h1 >{head1}  </h1>   
        <div className='color-box' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", }}>
          
        
        
           {avoid.map((color) => (
            <div>

            <div style={{
                backgroundColor: color.hex_code, 
                height: "150px",
                width: "150px",
                }}
                
            ></div>
            {color.color_name} <br />
            {color.usage } <br />
            <p className='description'>{color.reason}</p>
            </div>
          
           ))}
        </div>




        </div>
    );
};

export default Photo;
