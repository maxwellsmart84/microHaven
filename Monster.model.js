const dynamoose = require('dynamoose');


module.exports.Monster = dynamoose.model('Monster', {
    id: Number,
    name: String,
    level_1: {
      healthPoints: Number,

    },
    level_2: {
      healthPoints: Number,
    },
    level_3: {
      healthPoints: Number,
    },
    level_4: {
      healthPoints: Number,
    },
    level_5: {
      healthPoints: Number,
    },
    level_6: {
      healthPoints: Number,
    },
  }

});