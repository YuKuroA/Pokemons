import './PokemonCard.css'

interface CardProps {
    imgUrl: string;
    name: string;
    type: string;
    onClose: () => void
}

const PokemonCard: React.FC <CardProps> = (props) => {
    return (
        <div className="pokemon-card">
            <label>
                <div className="card-layer" onClick={props.onClose}></div>
            </label>
            <div className="card">
                <div className="photo">
                    <img src={props.imgUrl} alt="" />
                </div>
                <div>
                    <div className="name">{props.name}</div>
                    <div className="type">{props.type}</div>
                </div>
                <label>
                    <div className="close" onClick={props.onClose}>X</div>
                </label>
            </div>
        </div>
    )
}

export default PokemonCard;
