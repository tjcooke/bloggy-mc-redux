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

export function deletePost(id) {
    return {
        type: ACTION_DELETE_POST,
        payload: {
            id
        }
    }
}
window.deletePost = deletePost;


export function updatePost(id, payload) {
    return {
    type: ACTION_UPDATE_POST,
    payload: {
        id,
        ...payload
    }
    };

}

window.updatePost = updatePost;
