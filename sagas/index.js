import { spawn } from "redux-saga/effects";

import getIndex from "./getIndex";
import getStory from "./getStory";

export default function* () {
    yield spawn(getIndex);
    yield spawn(getStory);
}
