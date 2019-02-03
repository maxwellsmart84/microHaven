const { model, Schema } = require('dynamoose');

const attributeSchema = {
  healthPoints: { type: Number },
  movement: { type: Number },
  attack: { type: Number },
  range: { type: Number },
  retaliate: { type: Number },
  shield: { type: Number },
  muddle: { type: Boolean },
  wound: { type: Boolean },
  disarm: { type: Boolean },
  stun: { type: Boolean },
  curse: { type: Boolean },
  immobilize: { type: Boolean },
  poison: { type: Boolean },
  advantage: { type: Boolean },
  attackerDisadvantage: { type: Boolean },
};

const MonsterSchema = new Schema({
  id: {
    type: Number,
    validate: (v => v > 0),
    hashKey: true,
  },
  name: {
    type: String,
    rangeKey: true,
  },
  level_0: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_1: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_2: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_3: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_4: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_5: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_6: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
  level_7: {
    type: Map,
    elite: {
      type: Map,
      ...attributeSchema,
    },
    normal: {
      type: Map,
      ...attributeSchema,
    },
  },
});
const Monster = model('Monster', MonsterSchema);
module.exports = Monster;
