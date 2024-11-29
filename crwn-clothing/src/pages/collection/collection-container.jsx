import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSppiner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const collectionPageContainer = compose(
  connect(mapStateToProps),
  WithSppiner
)(CollectionPage);

export default collectionPageContainer;
