const Templ = ({temp , setMeme }) => {
    return (
        <div className="Temps">
        {temp.map((temp) => (
            <div key={temp.id} className="temps"  onClick={
                ()=>{
                    setMeme(temp);
                }
            }>
              <div style={{ backgroundImage: `url(${temp.url})` }} 
              className="image">
              </div>
            </div>
          ))}
          </div>
    );
}

export  default Templ;