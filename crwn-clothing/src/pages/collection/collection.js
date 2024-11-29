import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

// import { firestore } from "../../firebase/firebase.utils";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
  // const unsubscribeFromCollections = firestore
  //   .collection("collections")
  //   .onSnapshot((snapshot) => console.log(snapshot));
  // useEffect(() => {
  //   return () => {
  //     // Clean up the effect
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
