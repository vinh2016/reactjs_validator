import { observer } from '../observer/Observer';
import command from '../constants/command';

const showLoading = (isShow) => {
    observer.update(command.SHOW_LOADING, isShow);
}

export {
    showLoading
}