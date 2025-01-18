import Card from '../Card/Card';
import data from '../../assets/data.json';

import './Main.scss';

export default function Main() {
    return (
        <main>
            <section className='cardsGrid'>
                {data.map(user => <Card key={user.name} id={user.id} photo={user.photo} name={user.name} status={user.status} title={user.title} comment={user.comment} />)}
            </section>
        </main>
    )
}