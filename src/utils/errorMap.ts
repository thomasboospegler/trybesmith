export type Errors = 'any.required' | 'string.base' | 'string.min';

const errorsTypes = {
  'any.required': 400,
  'string.base': 422,
  'string.min': 422,
};

// Função que vai procurar o erro dentro do objeto de tipos de erro e retornara o código de status
// Repasar esta parte do código, tive que procurar no google para entender como fazer
export default (error: Errors): number => errorsTypes[error] || 422;
