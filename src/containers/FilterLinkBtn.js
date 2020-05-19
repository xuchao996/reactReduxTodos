import LinkBtn from "../components/LinkBtn";
import { connect } from "react-redux";
import { toggleStatus } from "../actionCreators";

const mapStateToProps = (state) => {
  return {
    currentStatus: state.status,
  };
};
const mapDispatchToProps = {
  toggleStatus,
};
export default connect(mapStateToProps, mapDispatchToProps)(LinkBtn);
