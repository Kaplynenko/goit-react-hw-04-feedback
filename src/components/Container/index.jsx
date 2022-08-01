import css from './container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}
console.log('r')
Container.propTypes = {
  children: PropTypes.object,
};

export default Container;
