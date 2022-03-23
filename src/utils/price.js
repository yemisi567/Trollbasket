

export const formatPrice = (value, country = 'NG') => {
    return new Intl.NumberFormat(`en-${country}`, {
        style: 'currency',
        currency: 'NGN',
    })
        .format(value || 0)
        .replace(/^(\D+)/, '$1 ');
};