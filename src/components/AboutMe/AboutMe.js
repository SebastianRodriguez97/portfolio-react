import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/SebastianRodriguez97",
            logo: logoGithub,
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/jsebastianrodriguezf",
            logo: logoLinkeind,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/channel/UCHRbgqBeYYDmp4_l8d6zEJA",
            logo: logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, i'm</p>
                        <p>Sebastián Rodríguez</p>
                        <p>Fullstack Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        Ing. de Sistemas de la universidad Uniminuto
                        con 6 años de experiencia en el desarrollo de software.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        { socialNetworks.map((network, index) => (
                            <a
                                key={ index }
                                href={ network.link }
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={ network.logo } alt={ network.name } />
                            </a>
                        )) }
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/Logo.png" alt="Sebastián Rodríguez - Fullstack Developer" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;