import styled from 'styled-components'
import image_01 from '../../assets/TagMusica.jpeg'
import image_02 from '../../assets/TagAnime.jpeg'
import image_03 from '../../assets/TagPhoto.jpeg'
import image_04 from '../../assets/TagVolley.jpeg'




export const About = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        color: ${ props => props.theme.colors.text_color_def };
        background: ${ props => props.theme.colors.back_color_blur };
        backdrop-filter: blur(15px);
        font-family: 'Metrica';
        padding: 10px auto;
    }
    .item {
        position: relative;
        text-transform: uppercase;
        font-family: 'Metrica';
        font-size: 14px;
        max-width: 140px;
        width: 100%;
        position: relative;
        letter-spacing: 2.5pt;
        margin-bottom: 20px;

        &::before {
            position: absolute;
            content: '';
            top: 20px;
            height: 4px;
            width: 20px;
            background: ${ props => props.theme.colors.text_color_def };
        }
    }

    .lessme {
        position: relative;
        font-size: 16px;

        & h1 {
            font-family: 'Poppins-alt';
            & span {
                font-family: 'Metrica';
                font-weight: bold;
                letter-spacing: 2.5px;
            }
        }
    }

    .ilove {
        position: relative;
        & .wrapper {
            width: 100%;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: ceneter;

            & .container {
                height: 290px;
                display: flex;
                flex-wrap: nowrap;
                justify-content: start;

                & input { 
                    display: none; 
                    &:checked + label { width: 260px; }
                    &:checked + label .infor { 
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                    } 
                }

                & .card {
                    width: 40px;
                    border-radius: .7rem;
                    background-size: cover;
                    margin: 0 10px;
                    cursor: pointer;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    transition: .6s cubic-bezier(.28, -0.03, 0, .99);
                    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, .8);

                    & > .row {
                        color: ${ props => props.theme.colors.text_color_def };
                        display: flex;
                        flex-wrap: nowrap;

                        & > .icone {
                            background: ${ props => props.theme.colors.theme_back_color };
                            color: ${ props => props.theme.colors.theme_icon_color };
                            width: 30px;
                            height: 30px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            margin: 5px;
                        }

                        & > .infor {
                            opacity: 0;
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            overflow: hidden;
                            height: 40px;
                            width: 190px;
                            transform: translateY(15px);
                            transition: all .3s ease;
                            text-transform: uppercase;
                            font-family: 'Metrica';
                            font-size: 16px;
                            font-weight: bold;
                            letter-spacing: 2.5px;
                            color: ${ props => props.theme.colors.theme_back_color };
                            background: ${ props => props.theme.colors.back_color_def + 20 };
                            filter: blur(.5px);
                        }
                    }

                    &[for = "T01"] { background-image: url( ${ image_01 } ); }
                    &[for = "T02"] { background-image: url( ${ image_02 } ); }
                    &[for = "T03"] { background-image: url( ${ image_03 } ); }
                    &[for = "T04"] { background-image: url( ${ image_04 } ); }
                }
            }
        }
    }
`;
