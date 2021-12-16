import { html } from '../../node_modules/lit-html/lit-html.js';
import { addAlike, deleteEvent, getEventById, getLikesFromUser, getTotalLikesForEvent } from '../api/data.js';

const detailsTemplate = (theater, isCreator, isUser, onDelete, onClick) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theater.title}</h1>
            <div>
                <img src=${theater.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theater.description}</p>
            <h4>Date: ${theater.date}</h4>
            <h4>Author: ${theater.author}</h4>
            <div class="buttons">
                ${isCreator ? 
                html`<a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${theater._id}">Edit</a>` 
                : ''}
                ${!isCreator && isUser ? html`<a @click=${onClick} class="btn-like" href="javascript:void(0)">Like</a>`
                : ''}
            </div>
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const isUser = ctx.user != undefined;
    const theaterId = ctx.params.id;
    const theater = await getEventById(theaterId);
    const isCreator = ctx.user && ctx.user._id === theater._ownerId;

    ctx.render(detailsTemplate(theater, isCreator,isUser, onDelete, onClick));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            await deleteEvent(theaterId);

            ctx.page.redirect('/profile');
        }
    }
// TODO: likes
    async function onClick(event) {
        const likesFromUser = await getLikesFromUser(theaterId, ctx.user._id);
        
     if (likesFromUser == 0) {
            let likes = document.querySelector('p.likes');
            let [text, number] = likes.textContent.split(': ');
            number = Number(number);
            number++;


            const countLikes = await getTotalLikesForEvent(theaterId);
            likes.textContent = `Likes: ${countLikes + 1}`;
            const likeBtn = event.target;
            likeBtn.style.display = 'none';
            await addAlike(theaterId);
    
        }       
    }
}