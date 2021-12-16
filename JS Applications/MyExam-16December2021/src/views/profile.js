import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyEvents } from '../api/data.js';
import { getUserData } from '../utility.js';

const profileTemplate = (events, userEmail) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userEmail}</h2>
    </div>
    <div class="board">

        ${events.length == 0
        ? html`<div class="no-events">
            <p>This user has no events yet!</p>
        </div>`
        : events.map(eventTemplate)}

    </div>
</section>`;

export async function profilePage(ctx) {
    //const userId = ctx.user._id;
    const user = getUserData();
    const myEvents = await getMyEvents(user._id);

    ctx.render(profileTemplate(myEvents, user.email));
}

const eventTemplate = (event) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${event.imageUrl}>
        <h2>${event.title}</h2>
        <h6>${event.date}</h6>
        <a href="/details/${event._id}" class="details-button">Details</a>
    </div>
</div>`