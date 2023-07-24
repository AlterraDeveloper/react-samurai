import { rerenderEntireTree } from "./render";
import { addMessage, addPost, state, updateNewPostText } from "./state";

rerenderEntireTree(state, addMessage, addPost, updateNewPostText);
