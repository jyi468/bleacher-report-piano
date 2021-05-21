const required = value => (value ? undefined : 'You haven\'t entered anything.');

const pattern = (regex, errorMessage) => value => regex.test(value) ? undefined : errorMessage;

export {required, pattern};