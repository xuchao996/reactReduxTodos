import AddItem from "../components/AddItem";
import { connect } from "react-redux";
import { add } from "../actionCreators";
const mapDispatchToProps = {
  add,
};
export default connect(null, mapDispatchToProps)(AddItem);
