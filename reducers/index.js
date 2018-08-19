import { combineReducers } from "redux";

import activeTab from "./activeTab";
import loading from "./loading";
import stories from "./stories";
import story from "./story";

export default combineReducers({
    activeTab,
    loading,
    stories,
    story
});
