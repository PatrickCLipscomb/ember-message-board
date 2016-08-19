import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        timestamp: Date()
      };
      this.sendAction('save', params);
      this.set('content', '');
      this.set('author', '');
      this.set('notes', '');
    }
  }
});
