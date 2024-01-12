import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profileReducer";

const state = {
    posts: [
        {
            id: 1,
            message: "Hi, how are you?",
            likesCount: 11,
            imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
        {
            id: 2,
            message: "how are you?",
            likesCount: 5,
            imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
        {
            id: 3,
            message: "Yo yo",
            likesCount: 2,
            imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
        {
            id: 4,
            message: "Hi",
            likesCount: 33,
            imgUrl: "https://randomuser.me/api/portraits/men/73.jpg",
        },
    ]
};

it('new post should be added', () => {
    const action = addPostActionCreator("alterradeveloper");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message of new post should be saved', () => {
    const action = addPostActionCreator("alterradeveloper");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("alterradeveloper");
});

it('after delete post posts length should be reduced', () => {
    const action = deletePostActionCreator(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(state.posts.length - 1);
});

it('after delete post with invalid id posts length should be same', () => {
    const action = deletePostActionCreator(999);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(state.posts.length);
});

