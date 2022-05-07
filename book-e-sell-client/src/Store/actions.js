import axios from 'axios';
import { bookActions } from './book-slice';
import { cartActions } from './cart-slice';
export const getAllBooks = () => {
    return async(dispatch) => {
        const sendRequest = async() => {
            await axios.get('/books').then(res => {
                const books = res.data.books;
                const totalBooks = res.data.count;
                console.log(books);
                dispatch(bookActions.viewAllBooks(books));
                dispatch(bookActions.getTotalBooks(totalBooks));
            }).catch(err => console.log(err));
        }
        sendRequest();
    }
}

export const getAllOrder = () => {
    return (dispatch) => {
        const sendRequestToDataBase = async() => {
            await axios.get('/orders').then(res => {
                const orders = res.data.orders;
                const totalItems = res.data.count;
                console.log(res);
                dispatch(cartActions.viewAllOrders(orders));
                dispatch(cartActions.getTotalItems(totalItems));
            }).catch(err => {
                console.log(err);
            })
        }
        sendRequestToDataBase();
    }
}