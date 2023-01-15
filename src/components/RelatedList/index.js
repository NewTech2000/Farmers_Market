import React from 'react';
import { FlatList } from 'react-native';
import RelatedItem from '../RelatedItem';
import PropTypes from 'prop-types';

/**
 Usage:
 <RelatedList list={[
            {iconBackgroundColor:'#000', title: 'test', icon: require('../../resources/assets/audits.png')},
            {iconBackgroundColor:'#000', title: 'test', icon: require('../../resources/assets/audits.png')}
        ]}/>
 **/

const RelatedList = ({
  list
}) => {

  return (
    <FlatList data={list}
              keyExtractor={(item) => item.id}
              style={{
                flexGrow: 1,
                paddingBottom: 2
              }}
              renderItem={({ item }) =>
                <RelatedItem {...item}/>}
    />
  );
};

RelatedList.propTypes = {
  list: PropTypes.array.isRequired,
};

RelatedList.defaultProps = {
  list: []
};

export default RelatedList;
