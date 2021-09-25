import fr from './fr';
import {CountryCode, Locale, LocaleDictionary} from "../utils/types";

const localeDictionary: LocaleDictionary = {
    fr,
}

export function getLocale(countryCode: CountryCode): Locale | any {
    const locale = localeDictionary[countryCode.toLowerCase()];

    if (!locale) {
        throw new Error('Unknown Country Code');
    }

    return locale;
}
