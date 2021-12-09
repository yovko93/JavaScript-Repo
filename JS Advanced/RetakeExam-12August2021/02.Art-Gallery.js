class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) == false) {
            throw new Error('This article model is not included in this gallery!');
        }

        let article = this.listOfArticles.find(a => a.articleName == articleName);

        if (article && article.articleModel == articleModel) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(g => g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 0;

        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({ guestName, points: points, purchaseArticle: 0 })

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        const article = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel.toLowerCase());

        if (!article) {
            throw new Error('This article is not found.');
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(g => g.guestName === guestName);

        if (!guest) {
            return 'This guest is not invited.';
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        } else {
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
            article.quantity--;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        const result = {
            article: () => {
                let result = [];
                result.push('Articles information:');
                this.listOfArticles
                    .forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));

                return result.join('\n');
            },
            guest: () => {
                let result = [];

                result.push('Guests information:');
                this.guests
                    .forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));

                return result.join('\n');
            }
        }
        return result.criteria;
        //     let result = [];

        //     switch (criteria) {
        //         case 'article':
        //             result.push('Articles information:');
        //             this.listOfArticles
        //                 .forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));

        //             break;
        //         case 'guest':
        //             result.push('Guests information:');
        //             this.guests
        //                 .forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));
        //             break;
        //     }

        //     return result.join('\n');
    }
}

// // Input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.listOfArticles);

// // Input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// // Input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// Input 4
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
