import css from './container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}
Container.propTypes = {
  children: PropTypes.object,
};

export default Container;
