import styled from 'styled-components';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

export const CheckoutPageContainer = styled.div`
    width: 70%;
    height: 90vh;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
` ;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const ItemTotal = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const StripeCheckoutButtonContainer = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 50px;
`

export const TestWarning = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`