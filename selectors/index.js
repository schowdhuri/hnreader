// import { createSelector } from "reselect";

import * as  ACTIONS from "../constants/actions";

export const isLoading = state => Boolean(state.loading.length);
export const isLoadingIndex = state =>
    Boolean(state.loading.find(name => name === ACTIONS.GET_INDEX));
export const getIndex = state => state.stories.items;
export const getStory = state => state.story.value;
export const getActiveTab = state => state.activeTab;
