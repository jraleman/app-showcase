import React from 'react';
import {
  View,
  Text
} from 'react-native';

import StarRating from 'react-native-star-rating';

export default class SwipeCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
    return;
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <View>
        <Text>{ "This is a card" }</Text>
        <Text>{ "This is a rating" }</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
      </View>
    );
  }
};
