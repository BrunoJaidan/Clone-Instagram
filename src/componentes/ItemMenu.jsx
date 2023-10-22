export default function ItemMenu(props) {
    return (
        <>
           <li>
            <span className="icons">{props.icone}</span>
            <span className="text">{props.texto}</span>
           </li>
        </>
    )
}

