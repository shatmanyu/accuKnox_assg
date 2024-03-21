import './App.css';
import ButtonComponent from './components/ButtonComponent';

function App() {
  const sentences = {1:"He's is not the sharpest knife in the drawer",3:"The big building was blazing with lights.",2:"Now you must answer some big questions",4:"Get your act together!"}
  const columns = Array(2).fill('Bold');
  const rows = Array(4).fill('');
  const map = {0:'1',2:'3',1:'2',3:'4'}

  function changeAtt(type,value,row_idx,col_idx){
    const targetEle = document.getElementById(`${map[row_idx+col_idx]}`)
    if(type === 'Bold' && targetEle.style.fontWeight===''){
      targetEle.style.fontWeight = 600
    }
    else if(targetEle.style.fontWeight){
      targetEle.style.fontWeight = ''
    }
    else if(type === 'Italic' && targetEle.style.fontStyle !== 'italic'){
      targetEle.style.fontStyle = 'italic'
    }
    else if(targetEle.style.fontStyle === 'italic'){
      targetEle.style.fontStyle = 'normal'
    }
    else if(type === 'Underline' && targetEle.style.textDecoration !== 'underline'){
      targetEle.style.textDecoration = 'underline'
    }
    else if(targetEle.style.textDecoration === 'underline'){
      targetEle.style.textDecoration = 'none'
    }
    else if(type === 'font-size'){
      targetEle.style.fontSize = `${value}px`
    }
    else if(type === 'color'){
      targetEle.style.color = `${value}`
    }
  }
  return (
    <div className="App">
              
              <div className='grid-container'>
                {columns?.map((col,index1)=>{
                  return (
                    rows?.map((row,index)=>{
                
                      return(
                        
                          index % 2 ?
                          <div key={index} className='grid-item'>
                          <span className='sent' id={index+index1}>{sentences[index+index1]}</span>
                          </div>
                          :
                          
                          <div key={index} className='grid-item' >
                          <ButtonComponent changeAtt={(type,value)=>changeAtt(type,value,index,index1)}/>
                          </div>
                      )
                    })
                  )
                })}
              </div>

    </div>
  );
}

export default App;
