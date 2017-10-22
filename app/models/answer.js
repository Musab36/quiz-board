import DS from 'ember-data';

export default DS.Model.extend({
content: DS.attr(), // Answer
user: DS.attr(), // Author
board: DS.belongsTo('board', { async: true }), // Answers belong to questions
});
