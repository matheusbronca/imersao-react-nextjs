import styled from 'styled-components';

const ImageContainer = styled.div`
    /* width: '100%';height: '350px', objectFit: 'cover'  */
    width: 100%;
    height: 350px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
        height: 200px;
    }
`;

export default ImageContainer;