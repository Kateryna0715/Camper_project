import { Circles } from 'react-loader-spinner';
import CSS from './index.module.css';

const Loader = () => {
  return (
    <div className={CSS.blocksWrapper}>
      <Circles
        height="80"
        width="80"
        color="#d84343"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};
export default Loader;
