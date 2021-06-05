import {addPost, deletePost, profileReducer, ProfileType, setUserProfile, setUserStatus} from "./profile-reducer";
import {PostType} from "../components/Profile/MyPosts/MyPostContainer";

const state = {
    posts: [
        {id: 1, message: "Hi!", likes: 15},
        {id: 2, message: "Hello World!", likes: 28},
        {id: 3, message: "How are you?", likes: 28},
        {id: 4, message: "Hello!", likes: 28},
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: ''
}

it('new post should be added', () => {
    // 1. тестовые данные
    let action = addPost('Hi')
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. проверка результата
    expect(newState.posts.length) .toBe(5)
    expect(newState.posts[4].message) .toBe('Hi')
})

it('after deleting length of message should be decrement', () => {
    // 1. тестовые данные
    let action = deletePost(1)
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. проверка результата
    expect(newState.posts.length) .toBe(3)
})

it('status should be update', () => {
    // 1. тестовые данные
    let action = setUserStatus('Hi')
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. проверка результата
    expect(newState.status) .toBe('Hi')
})

it('must not be received', () => {
    // 1. тестовые данные
    let action = setUserProfile(null)
    // 2. Action
    let newState = profileReducer(state, action)
    // 3. проверка результата
    expect(newState.profile) .toBe(null)
})

