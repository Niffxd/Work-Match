//TODO verificar que exista la imagen
const exist = true;

export default function Stars({ rate }) {
    return (
        [...Array(rate)].map((e, i) =>
            (exist &&
                <img
                    className={"star-icon"}
                    src='https://cdn-icons-png.flaticon.com/512/5583/5583265.png'
                    alt='Star'
                />)
            ||
            <span>&#9733;</span>
        )
    );
}