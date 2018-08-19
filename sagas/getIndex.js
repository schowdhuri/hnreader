import { takeEvery, put, call } from "redux-saga/effects";

import { GET_INDEX } from "../constants/actions";
import {
    getIndexSuccess,
    getIndexError,
    setLoading
} from "../actions";
import request from "../utils/request";

async function getItem(id) {
    const response = await request(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return response.json;
}
async function getStories(storyType) {
    const { url } = storyType;
    const storyIds = await request(url);
    const page = storyIds.json.slice(0, 10);
    const pArr = page.map(getItem);
    return await Promise.all(pArr);
}
function* getIndex(action) {
    yield put(setLoading(GET_INDEX, true));
    try {
        const stories = yield call(getStories, action.storyType);
        yield put(getIndexSuccess(stories));
    } catch(ex) {
        console.log(ex);
        yield put(getIndexError(ex));
    }
    yield put(setLoading(GET_INDEX, false));
};

export default function* () {
    yield takeEvery(GET_INDEX, getIndex);
}
