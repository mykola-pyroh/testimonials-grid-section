export default function Card({photo, name, status, title, comment}: {photo: string, name: string, status: string, title: string, comment: string}) {
    return (
        <article>
            <img src={photo} alt={`${name} photo`} />
            <p>{name}</p>
            <p>{status}</p>
            <h2>{title}</h2>
            <p>{comment}</p>
        </article>
    )
}