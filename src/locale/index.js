import { createI18n } from "vue-i18n"

import kz from './kz'
import ru from './ru'

const messages = {
    ru,
    kz
}

export default createI18n({
    fallbackLocale: "ru",
    messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
})