import * as ACTIONS from "../constants/actions";

export const setLoading = (id, status) => ({
    type: ACTIONS.IS_LOADING,
    id,
    status
});

export const getIndex = (storyType, num=0) => ({
    type: ACTIONS.GET_INDEX,
    storyType,
    num
});

export const getIndexSuccess = items => ({
    type: ACTIONS.GET_INDEX_OK,
    items
});

export const getIndexError = error => ({
    type: ACTIONS.GET_INDEX_ERR,
    error
});

export const getStory = id => ({
    type: ACTIONS.GET_STORY,
    id
});

export const getStorySuccess = story => ({
    type: ACTIONS.GET_STORY_OK,
    story
});

export const getStoryError = error => ({
    type: ACTIONS.GET_STORY_ERR,
    error
});

export const clearStory = () => ({
    type: ACTIONS.CLEAR_STORY
});

export const changeTab = value => ({
    type: ACTIONS.CHANGE_TAB,
    value
});
