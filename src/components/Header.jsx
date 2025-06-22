/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { moneyFormat } from '../utils/moneyFormat';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    const [subTotal, setSubtotal] = useState(0)

    const { cart, deleteFromCart, increment, decrement, clearCart } = useCart();
    useEffect(() => {
        if (cart) {
            let sum = cart?.map((a) => a.price * a.quantity);
            let subtotal = cart?.map((a) => a.price * a.quantity).reduce((a, b) => a + b, 0)
            setSubtotal(subtotal)
        } else {
            return;
        }


    }, [cart])


    const [cartOpen, setCartOpen] = useState(false);

    const navLinks = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Headphones",
            url: "headphones"
        },
        {
            title: "Speakers",
            url: "/speakers"
        },
        {
            title: "Earphones",
            url: "/earphones"
        }
    ];

    const handleCheckOut = () => {
        setCartOpen(false)
        navigate("/checkout")
    }

    return (
        <header className="bg-black text-white p-4 relative">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className="text-xl font-bold md:order-1 text-white">
                    <h1>audiophile</h1>
                </div>
                <nav className="hidden md:flex gap-8 md:order-2">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.url}
                            className={({ isActive }) =>
                                isActive ? "text-orange-400 font-semibold" : "hover:text-orange-400"
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>
                <div
                    className="md:order-3 flex items-center space-x-2 cursor-pointer"
                    onClick={() => setCartOpen(true)}
                >
                    <FaShoppingCart size={24} />
                    {cart.length > 0 && (
                        <span className="bg-orange-400 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-medium">
                            {cart.length}
                        </span>
                    )}
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.url}
                            className="block px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                            onClick={() => setMenuOpen(false)} // Optional: close mobile nav on click
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            )}
            {cartOpen && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/5 flex items-center justify-center z-50">
                    <div className="bg-white text-black rounded-lg shadow-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto p-6 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                            onClick={() => setCartOpen(false)}
                        >
                            <FaTimes size={20} />
                        </button>
                        <div className='flex flex-row justify-between mt-3'>
                            <h2 className="text-xl font-semibold mb-4">CART <span>({cart.length})</span> </h2>
                            <span className='text-gray-500 underline hover:text-blue-400 cursor-pointer' onClick={() => clearCart()}>Remove all</span>
                        </div>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div className="space-y-3">
                                
                                {
                                    cart && cart.map((item) => (
                                        <div key={item.id} className='flex items-center justify-between gap-4'>
                                            <div className='flex-shrink-0'>
                                                <img
                                                    src={item.img}
                                                    alt="Img"
                                                    className='object-cover w-16 h-16 rounded'
                                                />
                                            </div>
                                            <div className='flex-grow'>
                                                <p className='font-medium'>{item.name}</p>
                                                <p className='text-gray-600'>${moneyFormat(item.price)}</p>
                                            </div>
                                            <div className="bg-gray-100 flex items-center justify-between px-3 py-1 w-28 rounded">
                                                <button
                                                    onClick={() => decrement(item.id)}
                                                    className="text-lg font-bold text-gray-500 hover:text-black"
                                                >
                                                    -
                                                </button>
                                                <span className="font-semibold mx-2">{item.quantity}</span>
                                                <button
                                                    onClick={() => increment(item.id)}
                                                    className="text-lg font-bold text-gray-500 hover:text-black"
                                                >
                                                    +
                                                </button>
                                            </div>

                                        </div>
                                    ))

                                }
                                <div className='mt-3 flex flex-row justify-between'>
                                    <p className='text-gray-500'>TOTAL</p>
                                    <p className='font-bold'>${moneyFormat(subTotal)}</p>
                                </div>
                            </div>
                        )}
                        {cart.length > 0 && <div className='mt-3'>
                            <button onClick={() => handleCheckOut()} className='bg-primary p-2 w-full text-white hover:bg-amber-600 cursor-pointer'>Checkout</button>
                        </div>}
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;
