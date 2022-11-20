
import load from './loading.svg'
import  './styles.css'


const Loading =()=>{
    return(
        <>
            <img src={load} alt='load' className='App-logo'/>
            <h3>Carregando...</h3>
        </>

    )
}

export default Loading