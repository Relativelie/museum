import vk from '../../assets/images/footer/VK.comiconsvg.svg';
import tiktok from '../../assets/images/footer/tiktokicon.png';
import youtube from '../../assets/images/footer/youtube.png';
import facebook from '../../assets/images/footer/Facebookicon.png';

import './Footer.scss';

export const Footer = () => {
    const link = 'https://www.figma.com/file/AJg92P4NRV0azZ31k5KLIY/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0?node-id=12%3A42';
    return (
        <footer className="footer">
            <div className="footer_content">
                <header>
                    <h3 className="footer_content_title">Заголовок</h3>
                </header>
                <p className="footer_content__text">ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                <address>
                    <a className="footer_content__anchor" href={link}>500na700.ru</a>
                </address>
            </div>
            <div className="footer_social">
                <img src={vk} alt="vk" />
                <img src={facebook} alt="facebook" />
                <img src={tiktok} alt="tiktok" />
                <img src={youtube} alt="youtube" />
            </div>
        </footer>
    );
};
