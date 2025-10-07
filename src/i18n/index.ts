import en from './en.json';
import ru from './ru.json';
import ar from './ar.json';

export type LanguageCode = 'en' | 'ru' | 'ar';

export type Translation = typeof en;

export const translations: Record<LanguageCode, Translation> = {
  en,
  ru,
  ar,
};

export const defaultLanguage: LanguageCode = 'en';
