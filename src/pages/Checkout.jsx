import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { moneyFormat } from '../utils/moneyFormat'
import { useForm } from 'react-hook-form'
import OrderSummary from '../components/OrderSummary'

const Checkout = () => {

    const { cart, order, setOrder } = useCart()
    const [total, setTotal] = useState(0)
    const [subTotal, setSubtotal] = useState(0)
    const [details, setDetails] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            address: "",
            zipcode: "",
            city: "",
            country: "",
            phone: "",
            emoneypin: "",
            emoney: "",
            paymentMethod: 'e-money'

        }
    })

    const paymentMethod = watch('paymentMethod');


    const onSubmit = (data) => {
        if (data) {
            setDetails(data)
            setOrder(true)
        }
    }


    useEffect(() => {
        if (cart) {
            let subtotal = cart?.map((a) => a.price * a.quantity).reduce((a, b) => a + b, 0)
            setSubtotal(subtotal)
            const shipping = 50;
            const vat = 0.2;
            const taxedAmount = subtotal * vat;
            const grandTotal = subtotal + shipping + taxedAmount;
            setTotal(grandTotal)
        } else {
            return;
        }


    }, [cart])

    if (!cart || cart.length === 0) return <h1 className="text-center text-2xl mt-10">Nothing to See Here</h1>


    return (
        <div className="mt-6 max-w-6xl mx-auto px-4">
            <form className="flex flex-col lg:flex-row gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-1">
                    <div className="border border-gray-300 rounded-lg mb-3 p-4">
                        <div>
                            <h6 className="text-lg font-bold mb-2">Checkout</h6>
                            <div >
                                <div>
                                    <h6 className='my-4 text-lg font-medium text-primary'>BILLING DETAILS</h6>
                                    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">Name</label>
                                            <input type="text" placeholder='name' className={`p-3 border rounded-lg ${errors.name ? "border-red-600" : "border-gray-300"
                                                } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('name', { required: 'Name is required' })}
                                            />
                                            {errors.name && (
                                                <div className="text-red-600 text-sm mt-2 mb-2">{errors.name.message}</div>
                                            )}
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">Email Address</label>
                                            <input type="text" placeholder='email' className={`p-3 border rounded-lg ${errors.email ? "border-red-600" : "border-gray-300"
                                                } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('email', { required: 'Email Address is required' })}
                                            />
                                            {errors.email && (
                                                <div className="text-red-600 text-sm mt-2 mb-2">{errors.email.message}</div>
                                            )}
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">Phone Number</label>
                                            <input type="text" placeholder='phone' className={`p-3 border rounded-lg ${errors.phone ? "border-red-600" : "border-gray-300"
                                                } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('phone', { required: 'Phone is required' })}
                                            />
                                            {errors.phone && (
                                                <div className="text-red-600 text-sm mt-2 mb-2">{errors.phone.message}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className='my-4 text-lg font-medium text-primary'>SHIPPING</h6>
                                    <div className='flex flex-col'>
                                        <label className="text-sm font-bold mb-2">Address</label>
                                        <input type="text" placeholder='address' className={`p-3 border rounded-lg ${errors.address ? "border-red-600" : "border-gray-300"
                                            } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                            {...register('address', { required: 'Address is required' })}
                                        />
                                        {errors.address && (
                                            <div className="text-red-600 text-sm mt-2 mb-2">{errors.address.message}</div>
                                        )}
                                    </div>
                                    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>

                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">ZipCode</label>
                                            <input type="text" placeholder='zipcode' className={`p-3 border rounded-lg ${errors.zipcode ? "border-red-600" : "border-gray-300"
                                                } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('zipcode', { required: 'ZipCode is required' })}
                                            />
                                            {errors.zipcode && (
                                                <div className="text-red-600 text-sm mt-2 mb-2">{errors.zipcode.message}</div>
                                            )}
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">City</label>
                                            <input type="text" placeholder='city' className={`p-3 border rounded-lg ${errors.city ? "border-red-600" : "border-gray-300"
                                                } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('city', { required: 'City is required' })}
                                            />
                                            {errors.city && (
                                                <div className="text-red-600 text-sm mt-2 mb-2">{errors.city.message}</div>
                                            )}
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">Country</label>
                                            <input type="text" placeholder='country' className={`p-3 border rounded-lg ${errors.country ? "border-red-600" : "border-gray-300"
                                                } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('country', { required: 'Country is required' })}
                                            />
                                            {errors.country && (
                                                <div className="text-red-600 text-sm mt-2 mb-2">{errors.country.message}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className='my-4 text-lg font-medium text-primary'>PAYMENT DETAILS</h6>
                                    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div className="space-y-4 md:col-span-2">
                                            <p className="text-sm font-bold mb-2">Payment Method</p>
                                            <label className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'e-money' ? 'border-orange-500' : 'border-gray-300'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    value="e-money"
                                                    className="form-radio h-5 w-5 text-orange-500 focus:ring-orange-500"
                                                    {...register('paymentMethod')}
                                                />
                                                <span className="text-sm font-bold mb-2 ml-3">E-Money</span>
                                            </label>

                                            <label className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'cash' ? 'border-orange-500' : 'border-gray-300'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    value="cash"
                                                    className="form-radio h-5 w-5 text-orange-500 focus:ring-orange-500"
                                                    {...register('paymentMethod')}
                                                />
                                                <span className="text-sm font-bold mb-2 ml-3">Cash on Delivery</span>
                                            </label>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">e-Money Number</label>
                                            <input
                                                type="text"
                                                placeholder='234223232'
                                                className={`p-3 border rounded-lg ${errors.emoney ? "border-red-600" : "border-gray-300"
                                                    } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('emoney', {
                                                    required: 'E-Money Number is required',
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: "Please enter numbers only"
                                                    }
                                                })}
                                            />
                                            {errors.emoney && (
                                                <div className="text-red-600 text-sm mt-1">{errors.emoney.message}</div>
                                            )}
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="text-sm font-bold mb-2">e-Money PIN</label>
                                            <input
                                                type="text"
                                                placeholder='6743'
                                                className={`p-3 border rounded-lg ${errors.emoneypin ? "border-red-600" : "border-gray-300"
                                                    } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                                                {...register('emoneypin', {
                                                    required: 'e-Money PIN is required',
                                                    minLength: {
                                                        value: 4,
                                                        message: "PIN must be 4 digits"
                                                    },
                                                    maxLength: {
                                                        value: 4,
                                                        message: "PIN must be 4 digits"
                                                    },
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: "Please enter numbers only"
                                                    }
                                                })}
                                            />
                                            {errors.emoneypin && (
                                                <div className="text-red-600 text-sm mt-1">{errors.emoneypin.message}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-300 p-4 max-h-min w-full lg:w-[400px]">
                    <h6 className="text-lg font-bold mb-2">Summary</h6>
                    <div>
                        <div className="space-y-3">
                            {
                                cart && cart.map((item) => (
                                    <div key={item.id} className='flex items-center justify-between gap-4 mb-8'>
                                        <div className='flex-shrink-0'>
                                            <img
                                                src={item.img}
                                                alt="Img"
                                                className='object-cover w-16 h-16 rounded'
                                            />
                                        </div>
                                        <div className='flex-grow'>
                                            <p className='font-medium'>{item.name}</p>
                                            <p className='text-gray-600'>${moneyFormat(item.price * item.quantity)}</p>
                                        </div>
                                        <div className="">
                                            <span>x{item.quantity}</span>
                                        </div>

                                    </div>
                                ))

                            }
                        </div>

                    </div>
                    <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div className="flow-root">
                            <div className="-my-3 divide-y divide-gray-200">
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500">TOTAL</dt>
                                    <dd className="text-base font-medium text-gray-900">${moneyFormat(subTotal)}</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500">SHIPPING</dt>
                                    <dd className="text-base font-medium text-gray-900">$50</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500">VAT(INCLUDED)</dt>
                                    <dd className="text-base font-medium text-gray-900">20%</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-bold text-gray-900">GRAND TOTAL</dt>
                                    <dd className="text-base font-bold text-primary">${moneyFormat(total)}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className="bg-orange-400 p-2 w-full text-white rounded hover:bg-orange-500 transition mt-4">Continue</button>
                    </div>


                </div>
            </form>
            <>
                {order && (
                    <OrderSummary details={details} total={total} subTotal={subTotal} />
                )}
            </>
        </div>


    )
}

export default Checkout