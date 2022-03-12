export const TEXT_VALIDATION_REX= /^[a-z]+$/i;
export const TELEPHONE_VALIDATION_REX= /^((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7}([\,\;]((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7})*$/;
export const EMAIL_VALIDATION_REX= /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
export const PASSWORD_VALIDATION_REX= /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
