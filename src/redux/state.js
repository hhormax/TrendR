let rerenderEntireTree = () => {
    console.log('State was changed');
}


let state = {
    profilePage: {
        posts: [{id: 1, message: 'Hi. how are you?', likesCount: 10}, 
                {id: 2, message: 'Its my first post.', likesCount: 12}
               ],
        newPostText: 'it-kam' 


    },
    dialogsPage: {
        dialogs: [{id: 1, name: 'Dimon'}, 
                 {id: 2, name: 'Max'}, 
                 {id: 3, name: 'Andrey'}, 
                 {id: 4, name: 'Vadim'},
                 {id: 5, name: 'Sasha'}, 
                 {id: 6, name: 'Nikita'},
    ],

    messages: [{id: 1, message: 'Hi'}, 
                  {id: 2, message: 'How are you?'}, 
                  {id: 3, message: 'Yo'}               
    ],
    },
    friendsPage: {
    navbarPersons: [{id: 1, name: 'Dimon'}, 
                    {id: 2, name: 'Max'}, 
                    {id: 3, name: 'Andrey'}
                ]
                }
}

export const addPost = () => {
    let newPost = {
        id: 5, message: state.profilePage.newPostText, likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;