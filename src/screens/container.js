import { connect } from 'react-redux';
import ListData3 from './ListData3';
const mapStateToProps = state => {
  return {
    data: state
  };
};

export const Container = connect(mapStateToProps)(ListData3);