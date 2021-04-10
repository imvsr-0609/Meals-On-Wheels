import React,{useState} from 'react'

import StripeCheckout from 'react-stripe-checkout';
import order_logo from '../../assets/image/order.png'
import NavBar from '../../components/Navbar/NavBar'
import {useHistory} from 'react-router-dom'
import './CheckOut.css'
import CheckOutComponent from '../../components/CheckOutComponent/CheckOutComponent';

const CheckOut = () => {

    const [showSuccessful,setShowSuccessful] = useState(false)
    
    const onToken =(token)=>{
        console.log(token)
        setShowSuccessful(true)
    }
    const history = useHistory()
    if(showSuccessful){
        setTimeout(()=>{
            history.push("/home")
        },10000)
    }

    return (
        <>
        {showSuccessful? 
            
            
            
        <div className='checkout-success'>
        
        <NavBar/>
        <div className='checkout-success-body'>
        <img className='order-img' src={order_logo} alt="thank you" />
        <h3>We have recieved your order . Our Delivery Partner will be reaching you soon</h3>
        <p>Thanks for using meals on wheels</p>
        <p>You'll be redirected to homepage now.</p>
        </div>
       
        
        
        </div> 
        :
            <div className='checkout-page'>
            <NavBar active={""}/>
            <div className='checkout'>
            <div className="checkout-container">
            
           <CheckOutComponent/>
           <CheckOutComponent/>
           <CheckOutComponent/>
           <CheckOutComponent/>
           <CheckOutComponent/>
           
            </div>
            <div className='checkout-details'>
            
            <div className='checkout-amount'>
            
            <h4>Total : 499</h4>
            <p>items : 6</p>
            
            </div>
            <div className='checkout-payment'>
            
            <StripeCheckout
            token={onToken}
            amount={799*100}
            billingAddress={true}
            zipCode={true}
            currency="INR"
            stripeKey="pk_test_51IZWtCSCJfNakBBBsdpV2waEIDx0xg9TPpZOKoXCxspFAE9ge9cOlwlDMaXD9Q8X9HQoejU5SjJpsKHxymGNrfKi00QQvQPSLN"
          />
            
            </div>
            
            </div>
            </div>
        </div> }
        
        </>
    )
}

export default CheckOut
