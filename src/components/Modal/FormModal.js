import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext, useState } from 'react';
import OrdersContext from '../../strore/order-context';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='space-y-3'>
            <label htmlFor={props.id || props.name} className='capitalize block opacity-70'>{label}</label>
            <input className={`border border-black rounded-full px-5 py-1 w-full outline-none ${meta.touched && meta.error && 'border-red-600'}`} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error text-red-600 text-sm">{meta.error}</div>
            ) : null}
        </div>
    );
};

const FormModal = (props) => {
    const ctx = useContext(OrdersContext);
    const [isValid, setIsValid] = useState({
        type: true,
        text: ''
    });

    const sendData = async (data) => {
        try {
            await axios.post('https://food-order-app-3cdb2-default-rtdb.firebaseio.com/orders.json', {
                meals: ctx.orders,
                userData: data
            });
            setIsValid({ type: true, text: 'Your order has been confirmed.' });
            ctx.clearCart();
            setTimeout(() => {
                props.onClose();
            }, 1000);
        }
        catch (e) {
            setIsValid({ type: false, text: 'Something went wrong, please try again.' });
        }

    }

    const closeForm = () => {
        props.onClose();
    }

    return (
        <>
            <Formik
                initialValues={{
                    fullname: '',
                    city: '',
                    street: '',
                    postalcode: '',
                }}

                validationSchema={Yup.object({
                    fullname: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required!!').trim(),
                    city: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required!!').trim(),
                    street: Yup.string()
                        .max(50, 'Must be 50 characters or less')
                        .required('Required!!').trim(),
                    postalcode: Yup.string()
                        .required('Required!!')
                        .max(5, 'Must be 5 characters or less').trim(),
                })}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        sendData(values);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='space-y-3'>
                    <MyTextInput
                        label="full name"
                        id="fullname"
                        name="fullname"
                        type="text"
                    />
                    <MyTextInput
                        label="city"
                        name="city"
                        id="city"
                        type="text"
                    />
                    <MyTextInput
                        label="street"
                        name="street"
                        id="street"
                        type="text"
                    />
                    <MyTextInput
                        label="postal code"
                        name="postalcode"
                        id="postalcode"
                        type="text"
                    />
                    <div className='space-x-3 md:text-right text-center md:space-y-0 space-y-3'>
                        <button type='submit' className='capitalize border border-green-600 text-white bg-green-600 rounded-full px-3 py-1 hover:bg-white hover:text-green-600'>confirm</button>
                        <button type='button' className='capitalize hover:text-red-600 opacity-70' onClick={closeForm}>close</button>
                    </div>
                    {isValid.text && <div className={`text-center ${isValid.type ? 'text-green-600' : 'text-red-600'}`}>{isValid.text}</div>}
                </Form>
            </Formik >
        </>
    )
};

export default FormModal;