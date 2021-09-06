import styled from 'styled-components'

export const ProductContainer = styled.div`
    display:flex;
    height:fit-content;
    padding-top:30px;

    @media only screen and (max-width: 1023px) {
        padding-top:100px;
        flex-direction:column;
        display:flex;
        justify-content:center;
        align-items:center;
}
    
   
`;

export const Image = styled.img`
    width:500px;
     border-radius:20px;

         @media only screen and (max-width: 1023px) {
        width: 100%;
        margin-bottom:40px;
}
`;

export const ProductData = styled.div`
    width:100%;
    margin-left:50px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
           @media only screen and (max-width: 1023px) {
            margin-left:0px;
            padding:30px;
}
`;
export const OfferData = styled.div`
    color:red;
    font-size:15px;
    font-weight:700;
    padding-top:20px;

`;

export const ProductTitle = styled.div`
      font-size:26px;
    font-weight:700;
     padding-top:10px;
`;

export const ProductPrice = styled.div`
    color:gray;
    display:flex;
     padding-top:10px;
`;

export const Price = styled.div`
    color:red;
    font-size:15px;
    font-weight:700;
    margin-left:10px;
`;

export const ProductDetails = styled.div`
color:gray;
 padding-top:10px;
    @media only screen and (max-width: 1023px) {
       flex-wrap:wrap;
}
`;

export const VariationContainer = styled.div`
     display:flex;
    justify-content:center;
    align-items:center;
    
`;

export const Variation = styled.div`
    width:40%;
    height:300px;
    cursor:pointer;
    margin:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
        @media only screen and (max-width: 1023px) {
       flex-wrap:wrap;
}
`;

export const VariationImage = styled.img`
    width:90%;
    height:30%;

`;
export const VariationName = styled.div`
    background-color:white;
    height:50px;
    width:100%;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:600;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const ButtonContainer = styled.div`
display:flex;

  @media only screen and (max-width: 1023px) {
    flex-direction:column;
}


`;