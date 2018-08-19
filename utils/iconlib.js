import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChevronLeft,
    faChevronRight,
    faEdit,
    faSpinner ,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

export default () => {
    library.add(
        faChevronLeft,
        faChevronRight,
        faEdit,
        faSpinner,
        faTrash
    );
};
