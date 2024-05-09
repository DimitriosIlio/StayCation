import React from 'react';

import axios from 'axios';
import Stripe from "react-stripe-checkout";

const App = () => {

    handleToken = (totalAmount, token) => {
        try {
            axios.post("http://localhost:5000/api/stripe/pay", {
                token: token.id,
                amount: totalAmount
            });
        } catch (error) {
            console.log(error);
        };
    }

    const tokenHandler = (token) => {
        handleToken(100, token);

    }

    return (
        <div>
            <Stripe
             stripeKey="sk_test_51PDtBREVUTS7HRziuXNdrNtNcakIQqrwzuHvGjyGS1nm0RtiFYHk63at8mXOTnUHXbaRY0y1meNY6Hn3Tx76UDsN00uiIMLK9R"
             token={tokenHandler}
             />
        </div>
    );
}

export default App;