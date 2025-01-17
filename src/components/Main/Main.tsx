import Card from '../Card/Card';
import data from '../../assets/data.json';

export default function Main() {
    return (
        <section>
            {data.map(user => <Card key={user.name} photo={user.photo} name={user.name} status={user.status} title={user.title} comment={user.comment} />)}
        </section>
    )
}