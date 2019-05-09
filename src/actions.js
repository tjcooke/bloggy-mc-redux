// Action types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

// Action creators 

export function createPost(payload) {
    // assumes that the data argument looks like this:
    // {
    //  title: 'lorem ipsum',
    //  content: 'blah blah blah',
    // }
    
    return {
        type: ACTION_CREATE_POST,
        payload
    }
}

window.createPost = createPost;

export function updatePost() {
    return {

    }

}


export function deletePost() {
    return {

    }
}