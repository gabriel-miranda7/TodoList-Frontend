import styled from 'styled-components';
import { loginBgLight, loginBgDark, headerLeftColor, iconColor } from '../../config/colors';

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: ${loginBgLight};

    .image{
        display: flex;
        width: 50vw;
        height: 100vh;
        align-items: flex-end;

        img {
            width: 80%;
            height: 60%;
        }
    }

    .login{
        display: flex;
        flex-direction: column;
        width: 50vw;
        height: 100vh;
        background-color: ${loginBgDark};
        border-radius: 20px;
        align-items: center;
        padding: 5% 15% 18% 5%;
    }

    .form_login{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .login_field {
            display: flex;
            flex-direction: column;
            font-size: 28px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            gap: 10px;

            input {
                border: none;
                border-radius: 15px;
                width: 100%;
                height: 60px;
                background-color: #b3b4b7;
                padding-left: 20px;
                font-size: 30px;
                font-family: 'Poppins', sans-serif;
            }
        }

        button {
            margin-top: 4%;
            background-color: ${headerLeftColor};
            text-align: center;
            height: 60px;
            border: none;
            border-radius: 10px;
            font-size: 30px;
            color: #fff;
            font-family: 'Poppins', sans-serif;
        }

        .checkbox {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-left: 20px;
            font-size: 20px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            input {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }
    }

    .footer {
        margin-top: 15%;
        display: flex;
        width: 100%;

        .signup_button {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 25px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            button {
                border: 5px solid ${iconColor};
                color: ${iconColor};
                height: 50px;
                padding: 5px;
                font-size: 25px;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
            }
        }
    }
`;