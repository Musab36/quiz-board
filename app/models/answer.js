import DS from 'ember-data';

export default DS.Model.extend({
content: DS.attr(),
user: DS.attr(),
board: DS.belongsTo('board', { async: true }),
});
