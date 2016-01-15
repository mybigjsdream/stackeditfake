/**
 * Created by dengjing on 16/1/5.
 */

Router.route('/', {
    name: 'base.main',
    layoutTemplate: 'mk_layout',
    waitOn: () => {
        return Meteor.subscribe('articles');
    }
});