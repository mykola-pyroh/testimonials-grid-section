import './Card.scss';

export default function Card({id, photo, name, status, title, comment}: {id: string, photo: string, name: string, status: string, title: string, comment: string}) {
    return (
        <article className={id}>
            <div className="userCard__userInfo">
                <img src={photo} alt={`${name} photo`} className="userCard__userPhoto" />
                <div className="userCard__userDetail">
                    <p className="userCard__userName">{name}</p>
                    <p className="userCard__userStatus">{status}</p>
                </div>
            </div>
            <h2 className="userCard__userTitle">{title}</h2>
            <p className="userCard__userComment">{comment}</p>
        </article>
    )
}