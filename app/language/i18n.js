import I18n from 'react-native-i18n'
import en from './en'
import zh from './zh'
import zhhanttw from './zh-Hant-TW'
import zhhant from './zh-Hant'
import zhhans from './zh-Hans'

/**
 *  封装语言工具类
 * @type {boolean}
 */
//设置默认语言环境
I18n.defaultLocale = 'zh';
I18n.fallbacks= true;
I18n.translations = {
    en,
    zh,
    zhhant,
    zhhans,
    zhhanttw,
}

export default I18n;
