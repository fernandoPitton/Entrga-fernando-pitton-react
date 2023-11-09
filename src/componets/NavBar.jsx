import CartWidget from './CartWidget'

export default function NavBar(){
return(
    <div style={{backgroundColor: '#8B4513'}}>

    <div >
    
    <h1 className='text'>MaipuDigital</h1>
    </div>
    <nav>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                
            </ul>
                      
            <CartWidget />
    </nav>
    
    </div>
)
}