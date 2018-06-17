export default function(state = null, action) {
    if (!state) {
        return {title: 'Please select a book to start'};
    }
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}