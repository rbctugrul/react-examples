import PropTypes from 'prop-types';

function Button({ 
   children,
   primary,
   secondary,
   success,
   warning,
   danger,
   outline,
   rounded
}) {
   return <button>{children}</button>;
}

Button.prototype = {
   checkVariationValue: ({ primary, secondary, success, warning, danger, }) => {
      const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!warning)
      + Number(!!success)
      + Number(!!danger)

      if (count > 1) {
         return new Error('Only one of primary, secondary, success, warning, danger can be true')
      }
   },
};

export default Button;