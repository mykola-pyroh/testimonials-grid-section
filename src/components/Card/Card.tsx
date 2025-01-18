export default function Card({id, photo, name, status, title, comment}: {id: string, photo: string, name: string, status: string, title: string, comment: string}) {
    return (
        <article className={id}>
            <img src={photo} alt={`${name} photo`} />
            <p>{name}</p>
            <p>{status}</p>
            <h2>{title}</h2>
            <p>{comment}</p>
        </article>
    )
}