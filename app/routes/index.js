import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      tags: this.store.findAll('tag')
    }),
  }
  actions: {
    save(params) {
      var newQuestion = this.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
