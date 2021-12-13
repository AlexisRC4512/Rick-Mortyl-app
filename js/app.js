export default function DBapp(btnSearch) {
    const d=document;
      d.addEventListener('click',(e)=>{
        if (e.target.matches(btnSearch)) {
          console.log("hola")
          var results=d.querySelector('#res')
            const character=d.getElementById('character').value
          fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
          .then(response =>response.json())
          .then(characterlist )
          .catch(err=>console.log(err)) 
        }
        function characterlist(json){
          const characterRM = json.results
          .reduce((acc, character)=>{
      
              const {type} = character;
              if(acc[type] === undefined) acc[type] = [];
              acc[type].push(character);
              return acc;
      
          }, {});
     
          results.innerHTML = Object.keys(characterRM).map(key=>{
            const characterHTML = characterRM[key]
            .map(cha=>{
              return `
              <div class="Target col-12 col-lg-3 m-3">
                      <img src=`+ cha.image +` class="img-fluid mt-2">
                  <div class="Target-content">
                      <span class="Target-title">${cha.name}</span>
                      <p>Tipo: ${cha.type}</p>
                      <p>Especie: ${cha.species}</p>
                      <p>Estado: ${cha.status}</p>
                      <p>Genero: ${cha.gender}</p>
                  </div>
            
              </div>
          `
            })
            return `
          
               ${characterHTML}
          
        `
        })
      
          }
       })
          }       

        