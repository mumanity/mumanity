import { Post } from './post/post';

export const BLOGS: Array<Post> = [
    {
        id: 1,
        title: 'Bring Back the Blog!',
        content: `<p>"Bring back the blog!"&nbsp;</p><p>I've spent years doing web development. At work I'm all go 100% all the time. You need something done? Okay, but where did my blog go? Somewhere along the way I dropped the ball on keeping myself accountable to writing about my experiences. It's kind of the thing that helps explain all the stuff I do. It's what I share with friends and family who want to understand what it is I do for a living.&nbsp;</p><p>So recently when a friend pinged my old abandoned blog with that statement it wasn't just encouraging, it was my reminder to do all the stuff I talk about doing. When I write about it I get even more anxious to get more things done. And dang-it if that's not what I'm doing.&nbsp;</p><p>So build a new blog I must!</p><p>This weekend I built out the blog feature a bit more to have some actual content, and while you can't see it all just yet, I've implemented my blog-building capabilities. It was an interesting task too because I've been spoiled by <a href="https://www.telerik.com/kendo-ui" target="_new">Kendo</a>. And while I love them more than I previously realized, this is my personal site so throwing down a min $800 isn't going to happen unless I'm feeling pretty fancy... and I'm in my pajamas so let that be the answer there.&nbsp;</p><p>In order to solve that problem I searched the available options for a free wyswyg editor and there were some interesting options. The first one I tried to implement was not working at all so it got a quick <i>npm uninstall editor-i-wont-say</i> and out it went. <strong>Note to self: don't be blinded by a pretty website. Yes it's what you do, but no!</strong></p><p>In comes <a href="https://ckeditor.com" target="_new">CKEditor</a> to save the day - I think. The docs were well-written and helped me get things moving quickly. Unfortunately, it looks like there are some bugs left to be resolved.It's mainly the ability to upload images &amp; media to these posts and since I'm addicted to memes it's pretty much a guarantee to get fixed or replaced. My money is on fixed... or lack of money because it's free!&nbsp;</p><p>Anyhoo... enjoy the blogs. They kinda work now!</p>`,
        img: 'blogtest.jpg',
        createdDate: new Date('Mon May 27 2019 22:43:10 GMT-0500 (Central Daylight Time)')
    },
    {
        id: 2,
        title: 'Now With More Dinosaur!',
        content: `<p>I'll keep it short and sweet on this one. I've setup hosting on here for Bananapocalypse since so many people I know want and like to play it. It's a pretty simple game, but dang it if it's not good 'ole fashioned mind bleach.&nbsp;</p><p>Just like the side-scrollers of the '80s, you'll have limited options on what you can do. Okay... it's just one option. Dodge bananas.&nbsp;</p><p>Don't judge me. I did it in three days and I'm pretty proud of it.&nbsp;</p><p><a href="http://bananapocalypse.emilydodds.com/">Click here to go fourth and play!</a></p>`,
        img: 'bananasaur.png',
        createdDate: new Date('Wed May 29 2019 23:41:18 GMT-0500 (Central Daylight Time)')
    },
    // {
    //     id: 2,
    //     title: "It's Really Just a Jake Thing",
    //     content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     img: 'blog2test.png',
    //     date: new Date
    // },
    // {
    //     id: 3,
    //     title: 'test 3',
    //     content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     img: 'string',
    //     date: new Date
    // },
    // {
    //     id: 4,
    //     title: 'test 4',
    //     content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     img: 'string',
    //     date: new Date
    // }
]
