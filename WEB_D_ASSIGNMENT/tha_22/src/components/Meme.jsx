import { useState } from "react";


const Meme = ({meme , setMeme }) => {
    const [form ,setForm] =useState({
        template_id : meme.id,
        username : "ambivert_man",
        password: "#ambivert_man22",
        boxes:[],
    });

   const genememe = () => {
      let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
      form.boxes.map((box,index)=> {
         url +=  `$boxes[${index}][text]=${box.text}`;
      });
      console.log(url);
   };

    return (
        <div className="meme">
            <img src={meme.url} alt="" />
            <div>
                {
                    [...Array(meme.box_count)].map ( (ids ,index) => (
                        <input key={index} 
                        type="text" placeholder={`Meme Caption ${index+1}`} 
                        onChange={
                            (e)=>{
                                const newboxes =form.boxes;
                                newboxes[index] = { text : e.target.value};
                                setForm({ ...form , boxes :newboxes});
                            }
                        }
                        />
                    ))
                }
            </div>
            <div>
                <button onClick={genememe} >Generate Meme</button>
                <button onClick={
                    () => {
                        setMeme(null);
                    }
                }>Choose Template</button>
            </div>
        </div>
    );
};

export default Meme;