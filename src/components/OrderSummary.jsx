/* eslint-disable no-unused-vars */
import { useCart } from '../context/CartContext';
import { RiCloseLine } from "react-icons/ri";
import { moneyFormat } from '../utils/moneyFormat';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";

const OrderSummary = ({ details, total, subTotal }) => {
    const { setOrder, cart, clearCart } = useCart();
    const navigate = useNavigate()

    const handleOrder = () => {
        setOrder(false)
        navigate("/")

    }

    return (
        <div className="modal-overlay" >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div>
                    <div>
                        <div className='text-primary'>
                            <FaCheckCircle size={60} />
                        </div>
                        <h1 className='font-bold text-lg'>THANK YOU FOR YOUR ORDER</h1>
                        <p className='my-5 text-gray-500'>You would recieve an email confirmation soon</p>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className='w-full p-4 bg-gray-100 rounded-t-lg '>
                            <div className='flex justify-between items-center mx-auto border-b-1 border-gray-400 pb-2'>
                                <div>
                                    <img src={cart[0].img} alt="Img" height={50} width={50} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>{cart[0].name}</p>
                                    <p>${moneyFormat(cart[0].price)}</p>
                                </div>
                                <div>
                                    <span>x{cart[0].quantity}</span>
                                </div>
                            </div>
                            {cart.length > 0 && <div className='text-center mt-2'>
                                <p>and {cart.length - 1} other item(s)</p>
                            </div>}
                        </div>
                        <div className='w-full p-4 bg-black rounded-b-lg'>
                            <div className=''>
                                <p className='text-gray-400'>GRAND TOTAL</p>
                                <p className='text-white'>${moneyFormat(total)}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-4 w-full' onClick={handleOrder}>
                    <button className='w-full bg-primary text-white p-2'>BACK TO HOME</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;