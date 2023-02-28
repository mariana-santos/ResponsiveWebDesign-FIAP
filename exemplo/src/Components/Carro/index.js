import fusca from '../../img/fusca.jpg'

export default function Carro(){
    return(
        <>
            <img 
                src={fusca}
                alt="Fusquinha azul"
            />

            <ul>
                <li>Monza</li>
                <li>Fusca</li>
                <li>BMW</li>
                <li>Tesla</li>
                <li>Kombi</li>
            </ul>
        </>
    )
}